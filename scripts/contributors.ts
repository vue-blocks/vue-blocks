import md5 from 'md5'
import { x } from 'tinyexec'
import { resolve } from 'node:path'
import type { IContributorInfo } from '../app/types/contributor'
import { glob } from 'glob'
import { clone, construct } from 'radash'
import type { IRegistryItem } from '../app/types/registry'

export async function execCommand(cmd: string, args: string[], cwd: string): Promise<string> {
    return (await x(cmd, args, {
        nodeOptions: {
            cwd,
            shell: true,
        },
    })).stdout.trim()
}

export async function getContributorsAt(path: string) {
    try {
        const blockPath = resolve(process.cwd(), `${path}`)
        // console.log(await execCommand('git', ['log', '--pretty=format:"%an|%ae"', '--', blockPath], process.cwd()))
        const list = (await execCommand('git', ['log', '--pretty=format:"%an|%ae"', '--', blockPath], process.cwd()))
            .split('\n')
            .map(i => i.split('|') as [string, string])

        const map: Record<string, IContributorInfo> = {}

        list
            .filter(i => i[1])
            .forEach((i) => {
                if (!map[i[1]]) {
                    map[i[1]] = {
                        name: i[0],
                        count: 0,
                        hash: md5(i[1]),
                    }
                }
                (map[i[1]] ??= {
                    name: i[0],
                    count: 0,
                    hash: md5(i[1]),
                }).count++
            })
        return Object.values(map).sort((a, b) => b.count - a.count)
    }
    catch (e) {
        console.error(e)
        return []
    }
}

export const getBlocksContributors = async () => {
    const registryBlocks: any[] = []

    const registryFiles = await glob(resolve(process.cwd(), './app/registry/blocks/**/registry-items.json'))

    await Promise.all(registryFiles.map(async (file) => {
        const schema = await import(file).then(m => m.default)
        const content = construct(clone(schema)) as IRegistryItem
        delete content['component']
        delete content['$schema']
        delete content['className']
        registryBlocks.push(content)
    }))

    const registry = registryBlocks.map(block => ({
        block: block.title.toLocaleLowerCase(),
        componentName: block.name.toLocaleLowerCase(),
    }))

    const result = await Promise.all(registry.map(async (i) => {
        return [i.componentName, await getContributorsAt(`app/registry/blocks/${i.block}/${i.componentName}`)] as const
    }))

    return Object.fromEntries(result)
}
