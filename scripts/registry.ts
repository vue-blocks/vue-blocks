import type { IRegistryItem, IRegistrySchema } from '../app/types/registry'
import { resolve } from 'node:path'
import { glob } from 'glob'
import { clone, construct } from 'radash'

export const getRegistryFiles = async (): Promise<string[]> => {
    const BLOCKS_ROOT = resolve(process.cwd(), 'app/registry/blocks')

    return await glob('**/registry-items.json', {
        cwd: BLOCKS_ROOT,
        absolute: true,
        windowsPathsNoEscape: true,
    })
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
