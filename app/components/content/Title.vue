<template>
    <div class="space-y-2">
        <h1
            v-if="title"
            class="scroll-m-20 text-3xl font-semibold tracking-tight"
        >
            {{ title }}
        </h1>
        <p
            v-if="description"
            class="text-base text-secondary-foreground/60"
        >
            <span>{{ description }}</span>
        </p>
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'ContentTitle',
})

defineProps<{
    title?: string
    description?: string
}>()
</script>
