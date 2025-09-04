<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <slot />
            </TooltipTrigger>
            <TooltipContent :side="side">
                {{ content }}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script lang="ts" setup>
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'

defineOptions({
    name: 'AppTooltip',
})

declare const SIDE_OPTIONS: readonly ['top', 'right', 'bottom', 'left']
type Side = (typeof SIDE_OPTIONS)[number]

withDefaults(defineProps<{ content: string, side: Side }>(), {})
</script>

<style scoped>

</style>
