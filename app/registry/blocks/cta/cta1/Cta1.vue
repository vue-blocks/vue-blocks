<template>
    <section class="py-32">
        <div class="container mx-auto">
            <div
                class="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12"
            >
                <div class="flex-1">
                    <h3 class="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        {{ heading }}
                    </h3>
                    <p class="text-muted-foreground max-w-xl lg:text-lg">
                        {{ description }}
                    </p>
                </div>
                <div class="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button
                        as-child
                        size="lg"
                        variant="default"
                    >
                        <a :href="buttons.primary.url">{{ buttons.primary.text }}</a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'

const heading = 'Call to Action'
const description = 'Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.'
const buttons = {
    primary: {
        text: 'Buy Now',
        url: 'https://vue-blocks.dev',
    },
}
</script>
