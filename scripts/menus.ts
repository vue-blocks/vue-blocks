import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const run = async () => {
    const registry = await import('../registry.json').then(m => m.default)

    const map = new Map()

    const items = registry.items

    items.forEach((item) => {
        if (!map.has(item.title)) {
            map.set(item.title, [])
        }
        map.get(item.title)!.push(item)
    })

    const content = Array.from(map.entries()).map(([title, children]) => ({
        channel: title,
        children,
    }))

    writeFileSync(resolve(process.cwd(), './app/data/menus.json'), `${JSON.stringify(content)}`, 'utf-8')
}

run().then(() => {
})
