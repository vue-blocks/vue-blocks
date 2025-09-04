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

    let blocks = `export const blocks = {`
    await Promise.all(registryFiles.map(async (file) => {
        const schema = await import(file).then(m => m.default)

        const files = await glob(`${file.replace('registry.json', '')}**/*.vue`)

        const source = files.map((file) => {
            const filePath = file.replace(resolve(process.cwd(), 'app'), '@')
            const fileItems = filePath.split('/') ?? []
            const target = schema.component === filePath ? 'pages/index.vue' : `components/${fileItems.pop()}`

            const name = schema.name.charAt(0).toUpperCase() + schema.name.slice(1)

            return `
            {
                name: '${name}',
                target: '${target}',
                path: '${filePath}',
                raw: () => import('${filePath}?raw').then(m => m.default),
            }`
        })

        blocks += `
    ${schema.name}: {
        files: [${source},
        ],
        className: '${schema?.className ?? ''}',
        component: () => import('${schema.component}').then(m => m.default),
        raw: () => import('${schema.component}?raw').then(m => m.default),
    },\n`
    }))

    blocks += `}\n`

    writeFileSync(resolve(process.cwd(), './app/data/blocks.ts'), `${blocks}`, 'utf-8')
}

run().then(() => {
})
