<template>
    <div class="relative rounded-lg border overflow-hidden bg-background">
        <div class="w-full">
            <ClientOnly>
                <iframe
                    :src="url"
                    class="relative z-20 w-full bg-background min-h-(--height)"
                />
            </ClientOnly>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'BlockPreview',
})

withDefaults(defineProps<{
    url: string
}>(), {})
</script>
