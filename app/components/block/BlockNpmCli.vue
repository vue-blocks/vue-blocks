<template>
    <AppTooltip
        :content="cli"
        side="top"
    >
        <Button
            class="w-[10rem] h-8"
            variant="outline"
            @click="copy()"
        >
            <span class="flex items-center">
                <Icon
                    v-if="copied"
                    name="lucide:check"
                    :size="16"
                />
                <Icon
                    v-else
                    name="lucide:code"
                    :size="16"
                />
            </span>
            <span
                class="truncate"
            >{{ cli }}</span>
        </Button>
    </AppTooltip>
</template>

<script lang="ts" setup>
import { Button } from '~/components/ui/button'
import { useClipboard } from '@vueuse/core'
import type { BlockKey } from '~/types/blocks'

defineOptions({
    name: 'BlockNpmCli',
})

const props = withDefaults(defineProps<{
    module: BlockKey
}>(), {})

const config = useRuntimeConfig()

const cli = computed(() =>
    props.module
        ? `npx shadcn-vue@latest add ${config.public.website}/r/${props.module}.json`
        : '',
)

const { copy, copied } = useClipboard({ source: cli })
</script>
