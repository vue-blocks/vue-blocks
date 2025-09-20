<template>
    <section class="relative grid w-screen overflow-hidden py-32">
        <div class="container relative z-10 h-full items-center justify-center gap-6">
            <div class="relative flex h-20 w-full items-center justify-center border border-x-0">
                <h1 class="text-3xl font-medium uppercase tracking-tighter md:text-4xl">
                    Supported by the Finest
                </h1>
                <BgPattern />
            </div>
            <div class="w-full py-20">
                <Carousel
                    :opts="{
                        loop: true,
                        align: 'start',
                    }"
                    :plugins="[
                        AutoScroll({
                            playOnInit: true,
                        }),
                    ]"
                >
                    <CarouselContent class="ml-0">
                        <CarouselItem
                            v-for="logo in logos"
                            :key="logo.id"
                            :class="cn(
                                'h-35 border-border relative flex basis-1/2 justify-center border border-r-0 border-t-0 pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6',
                                logo.fill && 'bg-orange-500',
                            )"
                        >
                            <div class="flex flex-col items-center justify-center lg:mx-10">
                                <img
                                    :alt="logo.description"
                                    :class="logo.class"
                                    :src="logo.image"
                                >
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                <Carousel
                    :opts="{
                        loop: true,
                        align: 'end',
                    }"
                    :plugins="[
                        AutoScroll({
                            playOnInit: true,
                        }),
                    ]"
                >
                    <CarouselContent class="ml-0">
                        <CarouselItem
                            v-for="logo in logos"
                            :key="logo.id"
                            :class="cn(
                                'h-35 border-border relative flex basis-1/2 justify-center border border-b-0 border-r-0 border-t-0 pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6',
                                logo.fill && 'bg-orange-500',
                            )"
                        >
                            <div class="flex flex-col items-center justify-center lg:mx-10">
                                <img
                                    :alt="logo.description"
                                    :class="logo.class"
                                    :src="logo.image"
                                >
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            <div class="relative flex h-20 w-full items-center justify-center border border-x-0">
                <Button class="h-12 rounded-none !px-8">
                    Get Your Now
                </Button>
                <Button
                    class="flex h-12 items-center gap-3 rounded-none !px-8"
                    variant="ghost"
                >
                    <svg
                        fill="none"
                        height="18"
                        viewBox="0 0 15 18"
                        width="15"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.11523 3.94458C1.11523 2.36225 2.86573 1.40657 4.19675 2.26222L12.4982 7.59889C13.7229 8.38617 13.7229 10.1763 12.4982 10.9636L4.19675 16.3003C2.86573 17.1559 1.11523 16.2003 1.11523 14.6179V3.94458Z"
                            fill="black"
                            stroke="black"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        />
                    </svg>
                    How it works
                </Button>
                <BgPattern :side-lines="false" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AutoScroll from 'embla-carousel-auto-scroll'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import BgPattern from './BgPattern.vue'
import { cn } from '~/lib/utils'

const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: 'https://cdn.svglogos.dev/logos/strapi.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-2',
        fill: true,
        description: 'Logo 2',
        image: 'https://cdn.svglogos.dev/logos/hugging-face.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-3',
        description: 'Logo 3',
        image: 'https://cdn.svglogos.dev/logos/notion.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-4',
        description: 'Logo 4',
        image: 'https://cdn.svglogos.dev/logos/nuxt.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-5',
        description: 'Logo 5',
        image: 'https://cdn.svglogos.dev/logos/builder-io.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-6',
        description: 'Logo 6',
        image: 'https://cdn.svglogos.dev/logos/replit.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-7',
        description: 'Logo 7',
        image: 'https://cdn.svglogos.dev/logos/astro.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-8',
        description: 'Logo 8',
        image: 'https://cdn.svglogos.dev/logos/tailwindcss.svg',
        class: 'h-7 w-auto',
    },
]
</script>
