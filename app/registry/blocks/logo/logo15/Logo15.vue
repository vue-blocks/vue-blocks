<template>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div class="container px-4 md:px-6">
            <!-- Header -->
            <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div class="space-y-2">
                    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Enterprise Partners
                    </h2>
                    <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Trusted by industry leaders worldwide to deliver exceptional results
                    </p>
                </div>
            </div>

            <!-- Partner Carousel -->
            <div class="mb-12">
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
                    class="w-full"
                >
                    <CarouselContent>
                        <CarouselItem
                            v-for="partner in partners"
                            :key="partner.name"
                            class="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                        >
                            <Card class="p-6">
                                <div class="flex flex-col items-center space-y-4">
                                    <div class="w-30 flex items-center justify-center">
                                        <img
                                            :alt="partner.name"
                                            :src="partner.logo"
                                            :height="32"
                                            class="w-full h-6 group-hover:scale-110 transition-transform duration-300"
                                        >
                                    </div>
                                    <div class="text-center space-y-1">
                                        <h3 class="font-medium">
                                            {{ partner.name }}
                                        </h3>
                                        <p class="text-sm text-gray-500">
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
            </div>

            <!-- CTA -->
            <div class="flex flex-col items-center space-y-4 text-center">
                <h3 class="text-2xl font-bold">
                    Ready to Join Our Partner Network?
                </h3>
                <p class="text-gray-500 max-w-[600px]">
                    Connect with us to explore partnership opportunities and grow your business
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <Button size="lg">
                        Become a Partner
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

const partners = [
    {
        name: 'Gitlab',
        logo: 'https://cdn.svglogos.dev/logos/gitlab.svg',
        category: 'Enterprise Software',
        employees: '1000+',
        rating: 4.8,
    },
    {
        name: 'Vue Use',
        logo: 'https://cdn.svglogos.dev/logos/vueuse.svg',
        category: 'Library',
        employees: '500+',
        rating: 4.9,
    },
    {
        name: 'Vue',
        logo: 'https://cdn.svglogos.dev/logos/vue.svg',
        category: 'Library',
        employees: '200+',
        rating: 4.7,
    },
    {
        name: 'Nuxt',
        logo: 'https://cdn.svglogos.dev/logos/nuxt.svg',
        category: 'Development',
        employees: '150+',
        rating: 4.6,
    },
    {
        name: 'Nextjs',
        logo: 'https://cdn.svglogos.dev/logos/nextjs.svg',
        category: 'Enterprise Software',
        employees: '300+',
        rating: 4.5,
    },
    {
        name: 'Obsidian',
        logo: 'https://cdn.svglogos.dev/logos/obsidian.svg',
        category: 'Project Management',
        employees: '100+',
        rating: 4.4,
    },
]
</script>
