<template>
    <div
        :class="cn(
            'relative',
            className,
        )"
    >
        <Suspense>
            <Component :is="BlockComponent" />
        </Suspense>
    </div>
</template>

<script lang="ts" setup>
import { blocks } from '~/data/blocks'
import type { BlockKey } from '~/types/blocks'
import { cn } from '~/lib/utils'
import { useUrlSearchParams } from '@vueuse/core'

definePageMeta({
    layout: 'preview',
})

const queryParams = useUrlSearchParams()
const className = computed(() => (queryParams?.className ?? '' as string).split(',').filter(Boolean).join(' ') ?? '')

const config = useRuntimeConfig()
const route = useRoute()
const registryBlock = computed(() => blocks[route.params.block as BlockKey])

useSeoMeta({
    title: `${route.params.block} Component Preview - ${config.public.url}`,
    // description: 'sda',
})

const BlockComponent = defineAsyncComponent({
    loader: registryBlock.value.component,
})
</script>

<style scoped>

</style>
