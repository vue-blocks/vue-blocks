<template>
    <section
        v-if="defaultVisible"
        class="bg-primary w-full p-4"
    >
        <div class="container">
            <div class="relative flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-center">
                <Button
                    variant="ghost"
                    size="icon"
                    class="absolute right-0 top-0 h-8 w-8 md:hidden"
                    @click="handleClose"
                >
                    <X class="h-4 w-4" />
                </Button>

                <div class="text-primary-foreground flex flex-col items-center gap-3 pt-2 md:flex-row md:items-center md:pt-0">
                    <div class="flex flex-col gap-1 md:flex-row md:items-center">
                        <p class="text-sm font-medium">
                            {{ title }}
                        </p>
                        <p class="text-primary-foreground/80 text-sm">
                            {{ description }}
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        class="hidden h-8 w-8 invert md:inline-flex"
                        @click="handleClose"
                    >
                        <X class="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const title = 'Black Friday Sale! 🎉'
const description = 'Up to 70% off on all components. Limited time only!'
const defaultVisible = ref<boolean>(true)

const handleClose = () => {
    defaultVisible.value = !defaultVisible.value
}
</script>
