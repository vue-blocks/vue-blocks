import type { Plugin } from 'vite'
import { glob } from 'glob'
import { resolve, sep } from 'node:path'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { getRegistryFiles } from '../scripts/registry'

const VIRTUAL_MODULE_ID = 'virtual-blocks'
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID
const BLOCKS_ROOT = resolve(process.cwd(), 'app/registry/blocks')

function normalizePath(p: string) {
    return p.split(sep).join('/')
}

const TYPES_PATH = resolve(process.cwd(), 'app/types/virtual-blocks.d.ts')

async function generateTypes(blockNames: string[]) {
    mkdirSync(resolve(process.cwd(), 'types'), { recursive: true })

    const namesUnion = blockNames.map(n => `'${n}'`).join(' | ') || 'string'

    const code = `
// Auto-generated type declaration for virtual-blocks
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
export default blocks
`

    writeFileSync(TYPES_PATH, code, 'utf-8')
}

export function virtualBlocks(): Plugin {
    let server: any

    async function generateCode(ctx?: any) {
        const registryFiles = await getRegistryFiles()

        const blocks: Record<string, {
            files: { name: string, target: string, path: string }[]
            className: string
            componentPath: string
        }> = {}

        for (const rf of registryFiles) {
            const raw = readFileSync(rf, 'utf-8')
            let schema: any
            try {
                schema = JSON.parse(raw)
            }
            catch {
                continue
            }

            const folder = rf.replace(/registry-items\.json$/, '')
            const vueFiles = await glob(`${folder}**/*.vue`)

            if (ctx && typeof ctx.addWatchFile === 'function') {
                ctx.addWatchFile(rf)
                vueFiles.forEach(f => ctx.addWatchFile(f))
            }

            const source = vueFiles.map((f) => {
                const absAppRoot = normalizePath(resolve(process.cwd(), 'app'))
                const fileNorm = normalizePath(f)
                const filePath = fileNorm.replace(absAppRoot, '@')

                const fileItems = filePath.split('/')
                const last = fileItems[fileItems.length - 1] ?? ''
                const target = schema.component === filePath ? 'pages/index.vue' : `components/${last}`
                const name = (schema.name?.charAt(0)?.toUpperCase() ?? '') + (schema.name?.slice(1) ?? '')

                return { name, target, path: filePath }
            })

            if (!schema.name) continue
            blocks[schema.name] = {
                files: source,
                className: schema?.className ?? '',
                componentPath: schema.component,
            }
        }

        await generateTypes(Object.keys(blocks))

        const entries = Object.entries(blocks).map(([name, block]) => {
            const filesStr = block.files.map(f => `{
        name: ${JSON.stringify(f.name)},
        target: ${JSON.stringify(f.target)},
        path: ${JSON.stringify(f.path)},
        raw: () => import(${JSON.stringify(f.path + '?raw')}).then(m => m.default)
      }`).join(',\n')

            const compImport = `() => import(${JSON.stringify(block.componentPath)}).then(m => m.default)`
            const compRaw = `() => import(${JSON.stringify(block.componentPath + '?raw')}).then(m => m.default)`

            return `"${name}": {
        className: ${JSON.stringify(block.className)},
        files: [${filesStr}],
        component: ${compImport},
        raw: ${compRaw}
      }`
        }).join(',\n')

        return `// virtual-blocks — auto-generated
export default {${entries}}`
    }

    return {
        name: 'vite-plugin-virtual-blocks',

        resolveId(id) {
            if (id === VIRTUAL_MODULE_ID) return RESOLVED_VIRTUAL_MODULE_ID
            return null
        },

        async load(id) {
            if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                return await generateCode(this)
            }
            return null
        },

        configureServer(_server) {
            server = _server
            server.watcher.add(BLOCKS_ROOT)

            server.watcher.on('add', onFileChange)
            server.watcher.on('unlink', onFileChange)
            server.watcher.on('addDir', onFileChange)
            server.watcher.on('unlinkDir', onFileChange)

            function onFileChange(file: string) {
                if (!file.includes(BLOCKS_ROOT)) return
                const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
                if (mod) {
                    server.moduleGraph.invalidateModule(mod)
                    server.ws.send({ type: 'full-reload' })
                }
            }
        },

        handleHotUpdate(ctx) {
            const file = ctx.file || ''
            if (!file.includes(BLOCKS_ROOT)) return []

            const mod = ctx.server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
            if (mod) {
                ctx.server.moduleGraph.invalidateModule(mod)
                return [mod]
            }
            return []
        },
    }
}
