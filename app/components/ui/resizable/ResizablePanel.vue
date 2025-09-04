<script lang="ts" setup>
import type { SplitterPanelEmits, SplitterPanelProps } from 'reka-ui'
import { SplitterPanel, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SplitterPanelProps>()
const emits = defineEmits<SplitterPanelEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const internalRef = ref<InstanceType<typeof SplitterPanel>>()

defineExpose({
    instance: internalRef,
})
</script>

<template>
    <SplitterPanel
        v-bind="forwarded"
        ref="internalRef"
        data-slot="resizable-panel"
    >
        <slot />
    </SplitterPanel>
</template>
