<template>
    <h1
        :id="props.id"
        class="font-heading mt-2 scroll-m-20 text-2xl font-bold"
    >
        <NuxtLink
            v-if="generate"
            :to="`#${props.id}`"
        >
            <slot />
        </NuxtLink>
        <slot v-else />
    </h1>
</template>

<script lang="ts" setup>
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1)))
</script>
