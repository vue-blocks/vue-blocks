<script lang="ts" setup>
import type { TooltipTriggerProps } from 'reka-ui'
import { TooltipTrigger } from 'reka-ui'

const props = defineProps<TooltipTriggerProps>()
</script>

<template>
    <TooltipTrigger
        data-slot="tooltip-trigger"
        v-bind="props"
    >
        <slot />
    </TooltipTrigger>
</template>
