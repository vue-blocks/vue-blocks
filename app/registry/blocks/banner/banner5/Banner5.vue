<template>
    <section
        v-if="visible"
        class="animate-fade-in absolute left-0 right-0 top-4 z-50 mx-auto max-w-2xl"
    >
        <div class="mx-4">
            <div class="bg-background w-full rounded-lg border p-4 shadow-md">
                <div class="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <Button
                        class="absolute right-0 top-0 h-8 w-8 md:hidden"
                        size="icon"
                        variant="ghost"
                        @click="handleClose"
                    >
                        <X class="h-4 w-4" />
                    </Button>

                    <div class="flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:pt-0">
                        <div class="flex flex-col gap-1 md:flex-row md:items-center">
                            <p class="text-sm font-medium">
                                {{ title }}
                            </p>
                            <p class="text-muted-foreground text-sm">
                                {{ description }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        <Button
                            as-child
                            class="w-full md:w-auto"
                            size="sm"
                            variant="outline"
                        >
                            <a
                                :href="buttonUrl"
                                target="_blank"
                            >
                                {{ buttonText }}
                            </a>
                        </Button>
                        <Button
                            class="hidden h-8 w-8 md:inline-flex"
                            size="icon"
                            variant="ghost"
                            @click="handleClose"
                        >
                            <X class="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const title = 'Version 2.0 is now available!'
const description = 'Check out all the new features.'
const buttonText = 'Learn More'
const buttonUrl = 'https://vue-blocks.dev'
const visible = ref<boolean>(true)

const handleClose = () => {
    visible.value = !visible.value
}
</script>
