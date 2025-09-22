<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <!-- Header with Stats -->
            <div class="text-center space-y-16 mb-16">
                <div class="space-y-4">
                    <h2 class="text-3xl font-bold tracking-tight">
                        Our Global Partner Network
                    </h2>
                    <p class="text-muted-foreground max-w-2xl mx-auto">
                        Join our network of industry-leading partners who trust us to deliver exceptional results.
                    </p>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div
                        v-for="stat in stats"
                        :key="stat.label"
                        class="space-y-2"
                    >
                        <p class="text-3xl font-bold text-primary">
                            {{ stat.value }}
                        </p>
                        <p class="text-sm text-muted-foreground">
                            {{ stat.label }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Partner Carousel -->
            <Carousel
                :opts="{
                    align: 'start',
                    loop: true,
                }"
                :plugins="[AutoScroll({ playOnInit: true })]"
                class="w-full"
            >
                <CarouselContent>
                    <CarouselItem
                        v-for="partner in partners"
                        :key="partner.name"
                        class="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <Card class="p-6 h-full">
                            <div class="flex flex-col items-center text-center space-y-4">
                                <div class="flex items-center justify-center">
                                    <img
                                        :alt="partner.name"
                                        :src="partner.logo"
                                        class="size-full max-w-[150px]"
                                    >
                                </div>
                                <div>
                                    <h3 class="font-medium">
                                        {{ partner.name }}
                                    </h3>
                                    <p class="text-sm text-muted-foreground">
                                        {{ partner.category }}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <!-- Bottom Text -->
            <div class="mt-16 text-center text-muted-foreground">
                <p>Swipe or use arrows to see more partners</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AutoScroll from 'embla-carousel-auto-scroll'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'

const partners = [
    {
        name: 'Story Blocks',
        logo: 'https://cdn.svglogos.dev/logos/storyblocks.svg',
        category: 'Bloggers',
    },
    {
        name: 'Daisy UI',
        logo: 'https://cdn.svglogos.dev/logos/daisyUI.svg',
        category: 'Design',
    },
    {
        name: 'Miro',
        logo: 'https://cdn.svglogos.dev/logos/miro.svg',
        category: 'Teams',
    },
    {
        name: 'Notion',
        logo: 'https://cdn.svglogos.dev/logos/notion.svg',
        category: 'Teams',
    },
    {
        name: 'Bubble',
        logo: 'https://cdn.svglogos.dev/logos/bubble.svg',
        category: 'Teams',
    },
    {
        name: 'Meta',
        logo: 'https://cdn.svglogos.dev/logos/meta.svg',
        category: 'Business',
    },
    {
        name: 'Builder',
        logo: 'https://cdn.svglogos.dev/logos/builder-io.svg',
        category: 'Business',
    },
    {
        name: 'StackBlitz',
        logo: 'https://cdn.svglogos.dev/logos/stackblitz.svg',
        category: 'Data',
    },
]

const stats = [
    { value: '500+', label: 'Global Partners' },
    { value: '50M+', label: 'Users Reached' },
    { value: '99.9%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Support' },
]
</script>
