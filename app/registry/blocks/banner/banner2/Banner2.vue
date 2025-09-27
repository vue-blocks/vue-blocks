<template>
    <section
        v-if="defaultVisible"
        class="bg-muted w-full px-4 py-3"
    >
        <div class="container">
            <div class="flex items-center gap-2">
                <div class="flex-1">
                    <span class="text-sm">
                        <span class="font-medium">{{ title }}</span>{{ " " }}
                        <span class="text-muted-foreground">
                            {{ description }}{{ " " }}
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
                    variant="ghost"
                    size="icon"
                    class="-mr-2 h-8 w-8 flex-none"
                    @click="handleClose"
                >
                    <X class="h-4 w-4" />
                </Button>
            </div>
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
    defaultVisible.value = !defaultVisible.value
}
</script>
