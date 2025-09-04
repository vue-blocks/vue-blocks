<template>
    <div class="flex h-(--height) overflow-hidden rounded-xl bg-zinc-950 text-white">
        <div class="w-[280px]">
            <BlockViewerFileTree
                v-model="activeFile"
                :item
            />
        </div>
        <div class="flex min-w-0 flex-1 flex-col">
            <div class="flex h-12 flex-shrink-0 items-center gap-2 border-b border-zinc-700 bg-zinc-900 px-4 text-sm font-medium">
                <Icon name="lucide:file" />
                {{ activeFile?.path }}
                <div class="ml-auto flex items-center gap-2">
                    <BlockCopyCodeButton :code="activeFileMeta?.raw" />
                </div>
            </div>

            <div
                :key="activeFile?.path"
                :class="cn(
                    'relative flex-1',
                    'overflow-auto',
                    '[&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:translate-y-[-1px] [&_.line:before]:pr-1',
                    '[&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:pb-20 [&_pre]:pt-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed',
                )"
                data-line-codeblock
                v-html="activeFileMeta?.html"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
// source from:https://github.com/unovue/shadcn-vue/blob/dev/apps/www/.vitepress/theme/components/BlockViewerCode.vue
import type { BlockKey, IBlock, IFileTree } from '~/types/blocks'
import { highlight } from '~/lib/shiki'
import { cn } from '~/lib/utils'
import BlockViewerFileTree from '@/components/block/BlockViewerFileTree.vue'

defineOptions({
    name: 'BlockCode',
})

interface IProps {
    module: BlockKey
    item: IBlock
}

const props = withDefaults(defineProps<IProps>(), {})
const activeFile = ref<IFileTree>()

const cacheCodes = ref<Map<string, { raw: string, html: string }>>(new Map())
const activeFileMeta = computed(() => cacheCodes.value.get(activeFile.value?.path ?? ''))

onBeforeMount(async () => {
    // const raw = await blocks[props.module].raw()
    // console.log(raw)

    for (const file of (props.item.files ?? [])) {
        const raw = await file.raw()
        const highlighted = highlight(raw, 'vue')
        cacheCodes.value.set(file.target || file.path.split(`${props.item.name}/`)[1], {
            raw,
            html: highlighted,
        })
    }
})
</script>
