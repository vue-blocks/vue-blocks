import { resolve } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'

const TEMPLATE_PATH = resolve(process.cwd(), 'app', 'registry', 'blocks')
const temporaryBlockName = '[blockName]'
const BLOCK_PATH = resolve(TEMPLATE_PATH, '[block]')
const BLOCK_COMPONENT_PATH = resolve(BLOCK_PATH, temporaryBlockName)

const indexContent = `export { default as blockName } from './[blockName].vue'\n`
const registryContent = `{
    "$schema": "https://shadcn-vue.com/schema/registry-item.json",
    "name": "${temporaryBlockName}",
    "type": "registry:block",
    "title": "[block]",
    "dependencies": [],
    "registryDependencies": [],
    "files": [
        {
            "path": "app/registry/blocks/[block]/${temporaryBlockName}/${temporaryBlockName}.vue",
            "type": "registry:block",
            "target": "src/components/[block]/${temporaryBlockName}/${temporaryBlockName}.vue"
        },
        {
            "path": "app/registry/blocks/[block]/${temporaryBlockName}/${temporaryBlockName}/index.ts",
            "type": "registry:block",
            "target": "src/components/[block]/${temporaryBlockName}/index.ts"
        }
    ],
    "component": "@/registry/blocks/[block]/${temporaryBlockName}/${temporaryBlockName}.vue",
    "className": []
}
\n`
const componentContent = `<template>
    <!-- ToDo -->
</template>

<script lang="ts" setup>
</script>
`

;(async () => {
    await mkdir(BLOCK_PATH, { recursive: true })
    await mkdir(BLOCK_COMPONENT_PATH, { recursive: true })

    console.log(resolve(BLOCK_COMPONENT_PATH, 'index.ts'))
    await writeFile(resolve(BLOCK_COMPONENT_PATH, 'index.ts'), `${indexContent}`, 'utf-8')
    await writeFile(resolve(BLOCK_COMPONENT_PATH, 'registry.json'), `${registryContent}`, 'utf-8')
    await writeFile(resolve(BLOCK_COMPONENT_PATH, `${temporaryBlockName}.vue`), `${componentContent}`, 'utf-8')
})()
