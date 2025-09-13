<template>
    <section class="py-32">
        <div class="container mx-auto">
            <div class="bg-accent rounded-lg p-8 md:rounded-xl lg:p-12">
                <div class="max-w-4xl">
                    <h3 class="mb-4 text-3xl font-semibold md:text-5xl lg:mb-6 lg:text-6xl">
                        {{ heading }}
                    </h3>
                    <p class="text-muted-foreground mb-8 text-lg font-medium lg:text-xl">
                        {{ description }}
                    </p>
                    <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <Button
                            size="lg"
                            class="w-full sm:w-auto"
                            as-child
                        >
                            <a :href="buttons.primary.url">{{ buttons.primary.text }}</a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            class="w-full sm:w-auto"
                            as-child
                        >
                            <a :href="buttons.secondary.url">{{ buttons.secondary.text }}</a>
                        </Button>
                    </div>
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
    secondary: {
        text: 'Contact Us',
        url: 'https://vue-blocks.dev',
    },
}
</script>
