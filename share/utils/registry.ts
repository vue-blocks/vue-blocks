import type { IRegistryFile, IRegistryItem, IRegistrySchema } from '../../app/types/registry'
import { resolve, sep } from 'node:path'
import { glob } from 'glob'
import { clone, construct } from 'radash'
import { writeFileSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'

function normalizePath(p: string) {
    return p.split(sep).join('/')
}

const TYPES_PATH = normalizePath(resolve(process.cwd(), 'app/types/virtual-blocks.d.ts'))

const generatorBlockTypes = async (blockNames: string[]) => {
    await mkdir(normalizePath(resolve(process.cwd(), 'types')), { recursive: true })

    const namesUnion = blockNames.map(n => `'${n}'`).join(' | ') || 'string'

    // language=ts
    const code = `// Auto-generated type declaration for virtual-blocks
    export type BlockFile = {
        name: string
        target: string
        path: string
        raw: () => Promise<string>
    }

    export type BlockItem = {
        className: string
        files: BlockFile[]
        component: () => Promise<any>
        raw: () => Promise<string>
    }

    export type BlockKey = ${namesUnion}

    declare const blocks: Record<BlockKey, BlockItem>
    export default blocks`

    await writeFile(TYPES_PATH, code, 'utf-8')
}

export const getRegistryFiles = async (root = 'app/registry/blocks', url = '**/registry-items.json'): Promise<string[]> => {
    const BLOCKS_ROOT = normalizePath(resolve(process.cwd(), root))

    const files = await glob(url, {
        cwd: BLOCKS_ROOT,
        absolute: true,
        windowsPathsNoEscape: true,
    })

    return files.sort((a, b) =>
        a.localeCompare(b, undefined, {
            numeric: true,
            sensitivity: 'base',
        }),
    )
}

export const getAllRegistry = async (): Promise<IRegistrySchema> => {
    const registry: IRegistrySchema = {
        $schema: 'https://shadcn-vue.com/schema/registry.json',
        name: 'vue-blocks',
        homepage: 'https://vue-blocks.dev',
        items: [],
    }

    const registryFiles = await getRegistryFiles()

    await Promise.all(registryFiles.map(async (file) => {
        const schema = await import(file).then(m => m.default)
        const content = construct(clone(schema)) as IRegistryItem
        delete content['component']
        delete content['$schema']
        delete content['className']
        registry.items.push(content)
    }))

    return registry
}

export const getAllVueBlocks = async () => {
    const files = await getRegistryFiles()

    const blockNames: string[] = []

    const registryEntries = await Promise.all(
        files.map(async (file) => {
            const block = (await import(file)).default as IRegistryItem

            blockNames.push(block.name)

            return `"${block.name}": {
            ${
                Object.entries(block)
                    .map(([key, value]) => {
                        if (key === 'files') return null
                        return `"${key}": ${JSON.stringify(value)}`
                    })
                    .filter(Boolean)
                    .join(',\n')
            },
        "files": [${block.files.map((f: IRegistryFile) => {
            const filePath = f.path.replace('app/', '@/')
            //
            const fileItems = f.path.split('/')
            const last = fileItems[fileItems.length - 1] ?? ''
            const target = block.component === filePath ? 'pages/index.vue' : `components/${last}`
            const name = (block.name?.charAt(0)?.toUpperCase() ?? '') + (block.name?.slice(1) ?? '')

            return `{
                name: "${name}",
                target: '${target}',
                path: '${filePath}',
                raw: () => import(${JSON.stringify(`${block.component}?raw`)}).then(m => m.default),
            }`
        }).join(',')}],
        "component": () => import(${JSON.stringify(block.component)}).then(m => m.default),
        "raw": () => import(${JSON.stringify(`${block.component}?raw`)}).then(m => m.default)
    }`
        }),
    ).then(e => e.join(',\n'))

    await generatorBlockTypes(blockNames)

    writeFileSync(normalizePath(resolve(process.cwd(), 'registry.json')), JSON.stringify(await getAllRegistry(), null, 4))

    return `{${registryEntries}}`
}
