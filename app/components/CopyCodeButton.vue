<template>
    <TooltipProvider>
        <Tooltip :delay-duration="100">
            <TooltipTrigger as-child>
                <Button
                    class="h-7 w-7 [&_svg]:size-3.5"
                    size="icon"
                    variant="ghost"
                    @click="copy()"
                >
                    <span class="sr-only">Copy</span>
                    <Icon
                        v-if="copied"
                        name="lucide:check"
                        mode="svg"
                    />
                    <Icon
                        v-else
                        name="lucide:clipboard"
                        mode="svg"
                    />
                </Button>
            </TooltipTrigger>
            <TooltipContent>Copy code</TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script lang="ts" setup>
// source from : https://github.com/unovue/shadcn-vue/blob/dev/apps/www/.vitepress/theme/components/BlockCopyCodeButton.vue
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import { Button } from '~/components/ui/button'
import { useClipboard } from '@vueuse/core'

defineOptions({
    name: 'CopyCodeButton',
})

const props = withDefaults(defineProps<{
    code?: string
}>(), {
    code: '',
})
const { code } = toRefs(props)

const { copy, copied } = useClipboard({ source: code })
</script>
