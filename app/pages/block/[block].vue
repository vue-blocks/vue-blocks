<template>
    <section class="h-full min-h-svh py-20">
        <div class="container mx-auto space-y-4">
            <div class="h-full flex-1 space-y-6 transition-all duration-300">
                <BlockContainer :module="module" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import BlockContainer from '~/components/block/BlockContainer.vue'
import type { BlockKey } from '~/types/blocks'

const route = useRoute()
const config = useRuntimeConfig()

useSeoMeta({
    title: `${route.params.block}  - ${route.params.block} Component - ${config.public.url}`,
})

const module = computed(() => route.params.block as BlockKey)
</script>
