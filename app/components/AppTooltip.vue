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

type Side = 'top' | 'right' | 'bottom' | 'left'

withDefaults(defineProps<{ content: string, side: Side }>(), {})
</script>

<style scoped>

</style>
