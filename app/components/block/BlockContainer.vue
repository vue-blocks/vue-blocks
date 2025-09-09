<template>
    <BlockContributors :module="module" />
    <Tabs
        v-model="tabValue"
        class="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4"
    >
        <div class="flex items-center">
            <div class="flex justify-start items-center gap-4">
                <div>
                    <h1 class="text-xl font-semibold capitalize">
                        {{ $route.params.block }}
                    </h1>
                </div>
                <div
                    class="shrink-0 w-px bg-muted h-4 mx-1"
                />
                <TabsList>
                    <TabsTrigger
                        value="preview"
                    >
                        Preview
                    </TabsTrigger>
                    <TabsTrigger
                        value="code"
                    >
                        Code
                    </TabsTrigger>
                </TabsList>
            </div>
            <div class="ml-auto">
                <div class="flex items-center shadow-none gap-3">
                    <ToggleGroup
                        default-value="100"
                        type="single"
                        variant="outline"
                        @update:model-value="(value) => {
                            resizableRef.instance?.resize(parseInt(value as string))
                        }"
                    >
                        <ToggleGroupItem
                            class="h-8 px-3"
                            value="100"
                        >
                            <Icon
                                class="size-3"
                                mode="svg"
                                name="lucide:monitor"
                            />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            class="h-8 px-3"
                            value="60"
                        >
                            <Icon
                                class="size-3"
                                mode="svg"
                                name="lucide:smartphone"
                            />
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            class="h-8 px-3"
                            value="30"
                        >
                            <Icon
                                class="size-3"
                                mode="svg"
                                name="lucide:tablet"
                            />
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <BlockNpmCli :module="module" />
                    <Button
                        as-child
                        class="h-8"
                        size="icon"
                        variant="outline"
                    >
                        <NuxtLink
                            :to="iframeURL"
                            target="_blank"
                        >
                            <Icon
                                mode="svg"
                                name="lucide:maximize-2"
                            />
                        </NuxtLink>
                    </Button>
                    <BlockCallbackIssues />
                </div>
            </div>
        </div>
        <TabsContent
            v-show="tabValue === 'preview'"
            class="relative"
            force-mount
            value="preview"
        >
            <ResizablePanelGroup
                class="relative z-10"
                direction="horizontal"
            >
                <div class="absolute inset-0 rounded-xl right-4 bg-muted/30 overflow-hidden">
                    <div
                        :class="cn(
                            'absolute inset-0 rounded-xl',
                            '[background-size:_theme(text.base)__theme(text.base)]',
                            '[background-image:radial-gradient(_theme(colors.gray.300)_1px,transparent_1px)]',
                        )"
                    />
                </div>
                <ResizablePanel
                    ref="resizableRef"
                    :default-size="100"
                    :min-size="30"
                    as-child
                >
                    <BlockPreview :url="iframeURL" />
                </ResizablePanel>
                <ResizableHandle
                    id="block-resizable-handle"
                    class="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block"
                />
                <ResizablePanel
                    :default-size="0"
                    :min-size="0"
                />
            </ResizablePanelGroup>
        </TabsContent>
        <TabsContent value="code">
            <BlockCode
                v-if="componentRegistry"
                :item="componentRegistry"
                :module="module"
            />
        </TabsContent>
    </Tabs>
</template>

<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import { Button } from '~/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~/components/ui/resizable'
import { cn } from '~/lib/utils'
import BlockPreview from '~/components/block/BlockPreview.vue'
import BlockContributors from '~/components/block/BlockContributors.vue'
import BlockCode from '~/components/block/BlockCode.vue'
import type { BlockKey, IBlock } from '~/types/blocks'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error virtual
import blocks from 'virtual-blocks'
import BlockNpmCli from '~/components/block/BlockNpmCli.vue'
import BlockCallbackIssues from '~/components/block/BlockCallbackIssues.vue'

defineOptions({
    name: 'BlockContainer',
})

interface IProps {
    module: BlockKey
}

const props = defineProps<IProps>()

const tabValue = ref('preview')
const resizableRef = ref()

const componentRegistry = ref<IBlock>()

const iframeURL = computed(() => {
    const url = new URL(`${window.location.origin}/preview/${props.module}`)

    if (componentRegistry.value?.className) {
        url.searchParams.append('className', componentRegistry.value.className)
    }
    return url.href
})

watchEffect(() => {
    componentRegistry.value = blocks[props.module]
})
</script>
