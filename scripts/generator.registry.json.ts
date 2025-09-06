import { resolve } from 'node:path'
import { glob } from 'glob'
import { writeFileSync } from 'node:fs'
import { clone, construct } from 'radash'

const registry = {
    $schema: 'https://shadcn-vue.com/schema/registry.json',
    name: 'vue-blocks',
    homepage: 'https://vue-blocks.dev',
    items: [],
}

async function run() {
    const registryFiles = await glob(resolve(process.cwd(), './app/registry/blocks/**/registry.json'))

    await Promise.all(registryFiles.map(async (file) => {
        const schema = await import(file).then(m => m.default)
        const content = construct(clone(schema))
        delete content['component']
        delete content['$schema']
        delete content['className']
        registry.items.push(content)
    }))

    writeFileSync(resolve(process.cwd(), 'registry.json'), JSON.stringify(registry, null, 4))
}

run().then(() => {
})
