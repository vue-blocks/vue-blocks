<template>
    <div class="flex flex-row items-center justify-between">
        <NuxtLink
            v-if="surround?.[0]"
            :to="surround[0].path"
            class="inline-flex items-end flex-col gap-0.5 hover:text-zinc-600 group"
        >
            <span class="text-muted-foreground text-xs">Previouse</span>
            <span class="inline-flex items-center gap-0.5">
                <Icon
                    class="size-3.5 text-muted-foreground -ms-1 group-hover:text-zinc-600"
                    name="lucide:chevron-left"
                />
                {{ surround[0].title }}
            </span>
        </NuxtLink>
        <div v-else />

        <NuxtLink
            v-if="surround?.[1]"
            :to="surround[1].path"
            class="inline-flex flex-col gap-0.5 hover:text-zinc-600 group"
        >
            <span class="text-muted-foreground text-xs">Next</span>
            <span class="inline-flex items-center gap-0.5">
                {{ surround[1].title }}
                <Icon
                    class="size-3.5 text-muted-foreground -me-1 group-hover:text-zinc-600"
                    name="lucide:chevron-right"
                />
            </span>
        </NuxtLink>
        <div v-else />
    </div>
</template>

<script lang="ts" setup>
import type { ContentNavigationItem } from '@nuxt/content'

defineOptions({
    name: 'DocsPagination',
})

const route = useRoute()
const path = computed(() => route.path)

const { data: surround } = await useAsyncData<ContentNavigationItem[]>(`surround-${path.value}`, () => {
    return queryCollectionItemSurroundings('docs', path.value)
})
</script>
