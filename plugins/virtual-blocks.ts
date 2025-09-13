import type { Plugin } from 'vite'
import { resolve } from 'node:path'
import { getAllVueBlocks } from '../share/utils/registry'

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

            serverInstance.watcher.add(BLOCKS_ROOT)

            serverInstance.watcher.on('all', onFileChange)

            function onFileChange(eventName: string, file: string) {
                if (!file.includes(BLOCKS_ROOT)) return
                const mod = serverInstance.moduleGraph.getModuleById(VIRTUAL_ID)
                if (mod) {
                    serverInstance.moduleGraph.invalidateModule(mod)
                    serverInstance.ws.send({ type: 'full-reload' })
                }
            }
        },
    }
}
