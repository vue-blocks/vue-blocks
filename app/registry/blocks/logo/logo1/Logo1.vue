<template>
    <section class="py-64">
        <div class="container flex flex-col items-center text-center">
            <h1 class="my-6 text-2xl font-bold text-pretty lg:text-4xl">
                {{ heading }}
            </h1>
        </div>
        <div class="pt-10 md:pt-16 lg:pt-20">
            <div class="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                <Carousel
                    :opts="{
                        loop: true,
                    }"
                    :plugins="[AutoScroll({ playOnInit: true })]"
                >
                    <CarouselContent class="ml-0">
                        <CarouselItem
                            v-for="logo in logos"
                            :key="logo.id"
                            class="flex basis-1/3 min-w-0 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                        >
                            <div class="px-3 flex items-center justify-center">
                                <div>
                                    <img
                                        :src="logo.image"
                                        :alt="logo.description"
                                        :class="logo.className"
                                    >
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                <div class="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent" />
                <div class="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AutoScroll from 'embla-carousel-auto-scroll'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'

const heading = 'Trusted by these companies'
const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: 'https://cdn.svglogos.dev/logos/firebase.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-2',
        description: 'Logo 2',
        image: 'https://cdn.svglogos.dev/logos/gitlab.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-3',
        description: 'Logo 3',
        image: 'https://cdn.svglogos.dev/logos/nuxt.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-4',
        description: 'Logo 4',
        image: 'https://cdn.svglogos.dev/logos/biomejs.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-5',
        description: 'Logo 5',
        image: 'https://cdn.svglogos.dev/logos/tailwindcss.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-6',
        description: 'Logo 6',
        image: 'https://cdn.svglogos.dev/logos/json-schema.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-7',
        description: 'Logo 7',
        image: 'https://cdn.svglogos.dev/logos/apidog.svg',
        className: 'h-4 w-auto',
    },
    {
        id: 'logo-8',
        description: 'Logo 8',
        image: 'https://cdn.svglogos.dev/logos/vercel.svg',
        className: 'h-7 w-auto',
    },
]
</script>
