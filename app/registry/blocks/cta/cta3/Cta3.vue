<template>
    <section class="py-32">
        <div class="container mx-auto">
            <div class="flex justify-center">
                <div class="max-w-5xl">
                    <div
                        class="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16"
                    >
                        <div class="md:w-1/2">
                            <h4 class="mb-1 text-2xl font-bold md:text-3xl">
                                {{ title }}
                            </h4>
                            <p class="text-muted-foreground">
                                {{ description }}
                            </p>
                            <Button
                                as-child
                                class="mt-6"
                            >
                                <a
                                    :href="buttonUrl"
                                    target="_blank"
                                >
                                    {{ buttonText }}
                                    <Icon
                                        class="size-4"
                                        icon="lucide:arrow-right"
                                    />
                                </a>
                            </Button>
                        </div>
                        <div class="md:w-1/3">
                            <ul class="flex flex-col space-y-2 text-sm font-medium">
                                <li
                                    v-for="(item, idx) in items"
                                    :key="idx"
                                    class="flex items-center"
                                >
                                    <Icon
                                        icon="lucide:check"
                                        class="mr-4 size-4 flex-shrink-0"
                                    />
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const title = 'Call to Action'
const description = 'Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.'
const buttonText = 'Get Started'
const buttonUrl = 'https://vue-blocks.dev'

const items = [
    'Easy Integration',
    '24/7 Support',
    'Customizable Design',
    'Scalable Performance',
    'Hundreds of Blocks',
]
</script>
