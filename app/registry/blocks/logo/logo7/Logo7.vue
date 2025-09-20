<template>
    <section class="py-32">
        <div class="container flex flex-col items-center text-center">
            <h1 class="text-foreground my-6 text-lg font-semibold tracking-tight">
                The world's best product teams using our blocks
            </h1>
        </div>

        <div class="relative mx-auto flex items-center justify-center pt-8 lg:max-w-5xl">
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
                        class="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                    >
                        <div class="flex shrink-0 items-center justify-center lg:mx-10">
                            <div>
                                <img
                                    :alt="logo.description"
                                    :class="logo.className"
                                    :src="logo.image"
                                >
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div class="bg-linear-to-r from-background absolute inset-y-0 left-0 w-12 to-transparent" />
            <div class="bg-linear-to-l from-background absolute inset-y-0 right-0 w-12 to-transparent" />
        </div>
        <Separator class="my-15 mx-auto max-w-5xl" />

        <div>
            <Carousel
                :opts="{
                    loop: true,
                }"
                class="mx-auto w-full max-w-6xl"
            >
                <CarouselContent>
                    <CarouselItem
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                        class="md:basis-1/2 lg:basis-1/3"
                    >
                        <div
                            :class="cn(
                                'relativ border-border w-full border-r px-12 text-center md:px-8 md:text-left',
                                index == 0 && 'lg:border-l',
                            )"
                        >
                            <h5 class="text-muted-foreground mb-14 mt-5 line-clamp-3 text-lg tracking-tight md:mb-28">
                                {{ testimonial.quote }}
                            </h5>
                            <div class="mt-auto">
                                <p class="text-foreground text-lg font-semibold tracking-tight">
                                    {{ testimonial.name }}
                                </p>
                                <img
                                    :src="testimonial.image"
                                    alt="Company logo"
                                    class="mx-auto my-5 w-40 md:mx-0"
                                >
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AutoScroll from 'embla-carousel-auto-scroll'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: 'https://cdn.svglogos.dev/logos/astro.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-2',
        description: 'Logo 2',
        image: 'https://cdn.svglogos.dev/logos/firebase.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-3',
        description: 'Logo 3',
        image: 'https://cdn.svglogos.dev/logos/gitlab.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-4',
        description: 'Logo 4',
        image: 'https://cdn.svglogos.dev/logos/daisyUI.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-5',
        description: 'Logo 5',
        image: 'https://cdn.svglogos.dev/logos/importio.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-6',
        description: 'Logo 6',
        image: 'https://cdn.svglogos.dev/logos/miro.svg',
        className: 'h-5 w-auto',
    },
    {
        id: 'logo-7',
        description: 'Logo 7',
        image: 'https://cdn.svglogos.dev/logos/dovetail.svg',
        className: 'h-7 w-auto',
    },
    {
        id: 'logo-8',
        description: 'Logo 8',
        image: 'https://cdn.svglogos.dev/logos/tailwindcss.svg',
        className: 'h-7 w-auto',
    },
]
const testimonials = [
    {
        quote:
            'AI search capabilities have revolutionized our team\'s knowledge sharing. A true productivity game changer.',
        name: 'Mercury, Head of Finance',
        image: 'https://cdn.svglogos.dev/logos/openai.svg',
    },
    {
        quote:
            'Polished components and great docs have saved us countless hours while maintaining consistency.',
        name: 'Perplexity, Lead Machine Learning',
        image: 'https://cdn.svglogos.dev/logos/perplexity.svg',
    },
    {
        quote:
            'Perfect customization options - we\'ve created a unique look while keeping battle-tested reliability.',
        name: 'Retool, Product Manager',
        image: 'https://cdn.svglogos.dev/logos/retool.svg',
    },
]
</script>
