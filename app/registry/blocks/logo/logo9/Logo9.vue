<template>
    <section class="py-32">
        <div class="container">
            <h1 class="text-foreground my-6 max-w-4xl text-4xl font-medium tracking-tighter md:text-6xl">
                Discover how our tools have unlocked new
                <span class="text-muted-foreground/40">
                    levels of creativity
                </span>
                and efficiency
            </h1>

            <div class="bg-muted flex w-fit items-center justify-center gap-4 rounded-full px-4 py-2 tracking-tight transition-all ease-in-out hover:gap-6">
                <span class="bg-foreground inline-block size-3 rounded-full" />
                <p class="text-foreground">
                    Checkout Our Users
                </p>
            </div>

            <div class="relative mx-auto flex items-center justify-center pt-8">
                <Carousel
                    :opts="{
                        loop: true,
                    }"
                    :plugins="[
                        AutoScroll({
                            playOnInit: true,
                        }),
                    ]"
                >
                    <CarouselContent class="ml-0">
                        <CarouselItem
                            v-for="(logo, index) in logos"
                            :key="logo.id"
                            class="h-35 border-border relative flex basis-1/2 justify-center border border-r-0 pl-0 sm:basis-1/4 md:basis-1/3 lg:basis-1/6"
                        >
                            <div class="flex flex-col items-center justify-center lg:mx-10">
                                <p class="absolute left-2 top-2 text-xs tracking-tighter">
                                    {{ (index + 1).toString().padStart(2, "0") }}
                                </p>
                                <img
                                    :src="logo.image"
                                    :alt="logo.description"
                                    :class="logo.class"
                                >
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                <div class="bg-linear-to-r from-background absolute inset-y-0 left-0 w-32 to-transparent" />
                <div class="bg-linear-to-l from-background absolute inset-y-0 right-0 w-32 to-transparent" />
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

const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: 'https://cdn.svglogos.dev/logos/strapi.svg',
        class: 'h-7 w-auto',
    },
    {
        id: 'logo-2',
        description: 'Logo 2',
        image: 'https://cdn.svglogos.dev/logos/google-domains.svg',
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
