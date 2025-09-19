<template>
    <div class="relative not-first:mt-4 flex flex-col bg-primary rounded-xl">
        <div
            v-if="filename"
            class="flex justify-between items-center px-4 py-2.5 text-muted/65"
        >
            <span>{{ filename }}</span>
            <CopyCodeButton :code="code" />
        </div>
        <div
            :class="cn(
                '[&_pre]:rounded-xl',
                '[&_pre]:p-3',
                '[&_pre]:text-sm',
                '[&_pre]:overflow-x-auto',
                '[&_pre]:whitespace-pre-wrap',
                '[&_pre]:break-words',
                '[&_pre_code]:whitespace-pre-wrap',
                '[&_pre_code]:break-words',
                '[&_pre_code]:overflow-wrap-break-word',
                '[&_pre_code_.token.string]:break-all',
                '[&_pre_code_.token.string]:overflow-wrap-anywhere',
                filename? '[&_pre]:rounded-t-none' : '',
            )"
            v-html="highlight(code, language)"
        />
        <div
            v-if="!filename"
            class="absolute z-10 right-4 top-2 [&_button]:text-muted-foreground"
        >
            <CopyCodeButton :code="code" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { highlight } from '~/lib/shiki'
import { cn } from '~/lib/utils'

defineProps({
    code: {
        type: String,
        default: '',
    },
    language: {
        type: String,
        default: null,
    },
    filename: {
        type: String,
        default: null,
    },
    highlights: {
        type: Array as () => number[],
        default: () => [],
    },
    meta: {
        type: String,
        default: null,
    },
    class: {
        type: String,
        default: null,
    },
})
</script>
