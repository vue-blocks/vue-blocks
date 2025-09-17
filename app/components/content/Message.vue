<template>
    <div
        :class="cn(
            'not-first:mt-4 relative w-full rounded-lg border px-4 py-3 text-sm',
            compoundVariants[variant],
            '[&_p]:text-sm',
        )"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineProps<{
    variant: keyof typeof compoundVariants
}>()

const compoundVariants = {
    default: '',
    info: 'border-blue-500 bg-blue-50 [&_.inline-code]:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:[&_.inline-code]:bg-blue-900 text-blue-600',
    note: 'border-sky-500 bg-sky-50 [&_.inline-code]:bg-sky-100 dark:border-sky-900 dark:bg-sky-950 dark:[&_.inline-code]:bg-sky-900 text-sky-600',
    example: 'border-violet-500 bg-violet-50 [&_.inline-code]:bg-violet-100 dark:border-violet-900 dark:bg-violet-950 dark:[&_.inline-code]:bg-violet-900 text-violet-600',
    warning: 'border-amber-500 bg-amber-50 [&_.inline-code]:bg-amber-100 dark:border-amber-900 dark:bg-amber-950 dark:[&_.inline-code]:bg-amber-900 text-amber-600',
    success: 'border-green-500 bg-green-50 [&_.inline-code]:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:[&_.inline-code]:bg-green-900 text-green-600',
    danger: 'border-red-500 bg-red-50 [&_.inline-code]:bg-red-100 dark:border-red-900 dark:bg-red-950 dark:[&_.inline-code]:bg-red-900 text-red-600',
    secondary: 'bg-muted/50',
}
</script>
