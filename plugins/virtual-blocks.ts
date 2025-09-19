import type { Plugin } from 'vite'
import { resolve } from 'node:path'
import { getAllVueBlocks, updateRegistryContent } from '../share/utils/registry'
import { blue, green } from 'picocolors'
import { debounce } from 'radash'

const ID = 'virtual-blocks'
const VIRTUAL_ID = '\0' + ID
const BLOCKS_ROOT = resolve(process.cwd(), 'app/registry/blocks')

export const virtualBlocks = (): Plugin => {
    let serverInstance: any

    return {
        name: 'vite-plugin-virtual-blocks',
        resolveId(id) {
            return id === ID ? VIRTUAL_ID : null
        },
        async load(id) {
            if (id !== VIRTUAL_ID) return

            console.log('[vite-plugin-blocks]', 'loading blocks...')

            return `export default ${await getAllVueBlocks()}`
        },
        configureServer(server) {
            serverInstance = server

            const onFileChange = debounce({ delay: 100 }, async (eventName: string, file: string) => {
                if (!file.includes(BLOCKS_ROOT)) return

                console.log(`${blue('ℹ')} ${green('shadcn registry update')}`, file)

                await updateRegistryContent()

                const mod = serverInstance.moduleGraph.getModuleById(VIRTUAL_ID)
                if (mod) {
                    serverInstance.moduleGraph.invalidateModule(mod)
                    serverInstance.ws.send({ type: 'full-reload' })
                }
            })

            serverInstance.watcher.add(BLOCKS_ROOT)
            serverInstance.watcher.on('all', onFileChange)
        },
    }
}
