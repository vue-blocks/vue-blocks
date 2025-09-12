<template>
    <div class="min-h-full w-full has-[[data-variant=inset]]:bg-sidebar flex flex-col">
        <div class="flex h-full flex-col w-full flex-1 border-r border-zinc-700 bg-zinc-900 text-white">
            <div
                class="duration-200 flex shrink-0 items-center font-medium outline-none ease-linear h-12 rounded-none border-b border-zinc-700 px-4 text-sm text-white"
            >
                Files
            </div>
            <TreeRoot
                v-slot="{ flattenItems }"
                v-model="activeFile"
                v-model:expanded="expandedKeys"
                :get-key="(e) => e.name"
                :items="treeItem"
                class="list-none select-none"
            >
                <TreeItem
                    v-for="rows in flattenItems"
                    :key="rows._id"
                    v-slot="{ isSelected, isExpanded }"
                    as-child
                    v-bind="rows.bind"
                    @select="(ev) => {
                        if (rows.hasChildren || ev.detail.isSelected){
                            ev.preventDefault()
                        }
                    }"
                >
                    <Button
                        :data-active="isSelected"
                        :style="{ 'padding-left': `${(rows.level - 0.25) * 1.5}rem` }"
                        class="flex w-full justify-start whitespace-nowrap rounded-none pl-[--index] hover:bg-zinc-700 hover:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white"
                        variant="ghost"
                    >
                        <template v-if="rows.hasChildren">
                            <Icon
                                :class="{ 'rotate-90': isExpanded } "
                                class="transition-transform"
                                name="lucide:chevron-right"
                            />
                            <Icon name="lucide:folder" />
                        </template>
                        <template v-else>
                            <Icon
                                class="invisible"
                                name="lucide:chevron-right"
                            />
                            <Icon name="lucide:folder" />
                        </template>
                        <div>
                            {{ rows.value.name }}
                        </div>
                    </Button>
                </TreeItem>
            </TreeRoot>
        </div>
    </div>
</template>

<script lang="ts" setup>
// source from : https://github.com/unovue/shadcn-vue/blob/dev/apps/www/.vitepress/theme/components/BlockViewerFileTree.vue

import type { IFileTree } from '~/types/blocks'
import { Button } from '~/components/ui/button'
import { TreeItem, TreeRoot } from 'reka-ui'
import type { IRegistryItem } from '~/types/registry'

defineOptions({
    name: 'BlockViewerFileTree',
})

const props = defineProps<{
    item: IRegistryItem
}>()

const activeFile = defineModel<IFileTree>()

const flattenFiles = computed(() => {
    const root: IFileTree[] = []

    for (const file of props.item.files ?? []) {
        const path = file.target || file.path.split(`${props.item.name}/`)[1]
        const parts = path?.split('/') ?? ''

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i] as string
            const isFile = i === parts.length - 1
            const newNode: IFileTree = isFile
                ? { name: part, path }
                : { name: part, children: [] }

            root.push(newNode)
        }
    }
    return root
})

const treeItem = computed(() => {
    return createFileTreeForRegistryItemFiles([...(props.item.files ?? [])])
})

const expandedKeys = ref<string[]>([])

function createFileTreeForRegistryItemFiles(
    files: Array<{ path: string, target?: string }>,
) {
    const root: IFileTree[] = []

    for (const file of files) {
        const path = file.target || file.path.split(`${props.item.name}/`)[1]
        const parts = path?.split('/') ?? ''
        let currentLevel = root

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i] as string
            const isFile = i === parts.length - 1
            const existingNode = currentLevel.find(node => node.name === part)

            if (existingNode) {
                if (isFile) {
                    // Update existing file node with full path
                    existingNode.path = path
                }
                else {
                    // Move to next level in the tree
                    currentLevel = existingNode.children!
                }
            }
            else {
                const newNode: IFileTree = isFile
                    ? { name: part, path }
                    : { name: part, children: [] }

                currentLevel.push(newNode)

                if (!isFile) {
                    currentLevel = newNode.children!
                }
            }
        }
    }
    return root
}

watch(flattenFiles, (n) => {
    activeFile.value = n.filter(i => i.path)[0]
    expandedKeys.value = n.map(i => i.name)
}, { immediate: true })
</script>
