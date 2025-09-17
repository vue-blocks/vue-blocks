<template>
    <h3
        :id="props.id"
        class="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
    >
        <span>
            <NuxtLink
                v-if="props.id && generate"
                :to="`#${props.id}`"
            >
                <slot />
            </NuxtLink>
            <slot v-else />
        </span>
    </h3>
</template>

<script lang="ts" setup>
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h3)))
</script>
