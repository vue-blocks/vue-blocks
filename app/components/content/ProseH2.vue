<template>
    <h2
        :id="props.id"
        class="font-heading mt-12 scroll-m-15 text-xl font-semibold tracking-tight first:mt-0"
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
    </h2>
</template>

<script lang="ts" setup>
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>
