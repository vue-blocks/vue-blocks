<template>
    <section
        v-if="defaultVisible"
        class="bg-background w-full border-b px-4 py-3"
    >
        <div class="flex items-center justify-between gap-2">
            <div class="flex-1 text-center">
                <span class="text-sm">
                    <span class="font-medium">{{ title }}</span>{{ " " }}
                    <span class="text-muted-foreground">
                        {{ description }}
                        <a
                            :href="linkUrl"
                            class="hover:text-foreground underline underline-offset-2"
                            target="_blank"
                        >
                            {{ linkText }}
                        </a>
                        .
                    </span>
                </span>
            </div>

            <Button
                class="-mr-2 h-8 w-8 flex-none"
                size="icon"
                variant="ghost"
                @click="handleClose"
            >
                <X class="h-4 w-4" />
            </Button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const title = 'Version 2.0 is now available!'
const description = 'Read the full release notes'
const linkText = 'vueblocks'
const linkUrl = 'https://vue-blocks.dev'
const defaultVisible = ref<boolean>(true)

const handleClose = () => {
    console.log('123123')
    defaultVisible.value = !defaultVisible.value
}
</script>
