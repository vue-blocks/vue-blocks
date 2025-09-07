import type { Plugin } from 'vite'
import { getBlocksContributors } from '../scripts/contributors'

const ID = 'virtual-contributors'

export const virtualContributors = (): Plugin => {
    return {
        name: 'vite-plugin-blocks-contributors',
        resolveId(id) {
            return id === ID ? `${ID}` : null
        },
        async load(id) {
            if (id === ID) {
                return `export default ${JSON.stringify(await getBlocksContributors())}`
            }
        },
    }
}
