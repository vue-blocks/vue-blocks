<script lang="ts" setup>
import type { TooltipProviderProps } from 'reka-ui'
import { TooltipProvider } from 'reka-ui'

const props = withDefaults(defineProps<TooltipProviderProps>(), {
    delayDuration: 0,
})
</script>

<template>
    <TooltipProvider v-bind="props">
        <slot />
    </TooltipProvider>
</template>
