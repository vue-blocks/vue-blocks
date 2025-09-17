<template>
    <h6
        :id="props.id"
        class="mt-8 scroll-m-20 text-base font-semibold tracking-tight"
    >
        <NuxtLink
            v-if="props.id && generate"
            :to="`#${props.id}`"
        >
            <slot />
        </NuxtLink>
        <slot v-else />
    </h6>
</template>

<script lang="ts" setup>
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h6)))
</script>
