<template>
    <div class="hidden text-sm xl:block">
        <div class="sticky top-[100px] h-[calc(100vh-3.5rem)]">
            <div class="no-scrollbar h-full overflow-auto pb-20">
                <div class="space-y-0.5">
                    <div class="flex justify-start items-center gap-2.5">
                        <Icon name="lucide:list" />
                        <p class="font-medium text-xs text-primary">
                            On This Page
                        </p>
                    </div>
                    <ul class="m-0 list-none text-sm">
                        <li
                            v-for="item in toc?.links"
                            :key="item.id"
                            class="mt-0 pt-2"
                        >
                            <NuxtLink
                                :class="cn(
                                    'inline-block no-underline transition-colors hover:text-primary',
                                    activeId === item.id ? 'text-primary' : 'text-muted-foreground',
                                )"
                                :to="`#${item.id}`"
                            >{{ item.text }}
                            </nuxtlink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Toc } from '@nuxt/content'
import { cn } from '~/lib/utils'
import { useTocActiveItem } from '~/composables/useTocActiveItem'

defineOptions({
    name: 'DocsToc',
})

const props = defineProps<{
    toc?: Toc
}>()

const itemIds = computed(() => {
    return props.toc?.links
        ?.map(link => link.id)
        .filter(id => id) ?? []
})

const { activeId } = useTocActiveItem(itemIds)
</script>
