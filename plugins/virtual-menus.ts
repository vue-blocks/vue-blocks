import { resolve } from 'node:path'
import type { Plugin } from 'vite'
import { capitalize } from '../app/lib/utils'
import type { IRegistryItem, IRegistrySchema } from '../app/types/registry'
import { glob } from 'glob'
import { clone, construct } from 'radash'
import { writeFileSync } from 'node:fs'

const VIRTUAL_MODULE_ID = 'virtual-menus'
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID
const BLOCKS_ROOT = resolve(process.cwd(), 'app/registry/blocks')

const generatorMenus = async (ctx?: any) => {
    const registry: IRegistrySchema = {
        $schema: 'https://shadcn-vue.com/schema/registry.json',
        name: 'vue-blocks',
        homepage: 'https://vue-blocks.dev',
        items: [],
    }

    const registryFiles = await glob(resolve(process.cwd(), './app/registry/blocks/**/registry-items.json'))

    await Promise.all(registryFiles.map(async (file) => {
        const schema = await import(file).then(m => m.default)
        const content = construct(clone(schema)) as IRegistryItem
        delete content['component']
        delete content['$schema']
        delete content['className']
        registry.items.push(content)
    }))

    writeFileSync(resolve(process.cwd(), 'registry.json'), JSON.stringify(registry, null, 4))

    const map = new Map()

    const items = registry.items as IRegistryItem[]

    items.forEach((item: IRegistryItem) => {
        if (!map.has(capitalize(item.title))) {
            map.set(capitalize(item.title), [])
        }
        map.get(capitalize(item.title))!.push(item)
    })

    const content = Array.from(map.entries()).map(([title, children]) => ({
        channel: capitalize(title),
        children,
    }))

    return `export default ${JSON.stringify(content, null, 2)}`
}

const vitePluginMenus = (): Plugin => {
    let serverInstance: any

    return {
        name: 'vite-plugin-menus',

        resolveId(id: string) {
            if (id === VIRTUAL_MODULE_ID) {
                return RESOLVED_VIRTUAL_MODULE_ID
            }
        },

        async load(id: string) {
            if (id === RESOLVED_VIRTUAL_MODULE_ID) {
                return await generatorMenus(this)
            }
        },

        configureServer(_server) {
            serverInstance = _server
            serverInstance.watcher.add(BLOCKS_ROOT)

            serverInstance.watcher.on('add', onFileChange)
            serverInstance.watcher.on('change', onFileChange)
            serverInstance.watcher.on('unlink', onFileChange)
            serverInstance.watcher.on('addDir', onFileChange)
            serverInstance.watcher.on('unlinkDir', onFileChange)

            function onFileChange(file: string) {
                if (!file.includes(BLOCKS_ROOT)) return
                const mod = serverInstance.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
                if (mod) {
                    serverInstance.moduleGraph.invalidateModule(mod)
                    serverInstance.ws.send({ type: 'full-reload' })
                }
            }
        },
    }
}

export default vitePluginMenus
