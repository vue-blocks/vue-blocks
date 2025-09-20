<template>
    <div
        :style="bgPattern"
        class="absolute left-0 top-1/2 z-20 size-20 -translate-x-full -translate-y-1/2 border border-r-0"
    >
        <span class="bg-foreground absolute -right-1 -top-1 z-20 size-2" />
        <span class="bg-foreground absolute -bottom-1 -right-1 z-20 size-2" />
        <span class="bg-foreground absolute -bottom-1 -left-1 z-20 size-2" />
        <span class="bg-foreground absolute -left-1 -top-1 z-20 size-2" />
    </div>

    <div
        :style="bgPattern"
        class="absolute right-0 top-1/2 z-20 size-20 -translate-y-1/2 translate-x-full border border-l-0"
    >
        <span class="bg-foreground absolute -right-1 -top-1 z-20 size-2" />
        <span class="bg-foreground absolute -bottom-1 -right-1 z-20 size-2" />
        <span class="bg-foreground absolute -bottom-1 -left-1 z-20 size-2" />
        <span class="bg-foreground absolute -left-1 -top-1 z-20 size-2" />
    </div>

    <div
        v-if="sideLines"
        class="absolute left-0 z-10 h-[200vh] w-px border-l"
    />
    <div
        v-if="sideLines"
        class="absolute -left-20 z-10 h-[200vh] w-px border-l"
    />

    <div
        v-if="sideLines"
        class="absolute right-0 z-10 h-[200vh] w-px border-l"
    />
    <div
        v-if="sideLines"
        class="absolute -right-20 z-10 h-[200vh] w-px border-l"
    />
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
    sideLines?: boolean
}>(), {
    sideLines: true,
})

const bgPattern = {
    backgroundImage:
        'linear-gradient(135deg, var(--muted) 25%, transparent 25.5%, transparent 50%, var(--muted) 50.5%, var(--muted) 75%, transparent 75.5%, transparent)',
    backgroundSize: '10px 10px',
}
</script>
