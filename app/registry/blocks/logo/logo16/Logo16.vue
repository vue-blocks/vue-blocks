<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Partner Success Stories
                </h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    Discover how our partners are achieving remarkable results through collaboration.
                </p>
            </div>

            <!-- Featured Testimonials -->
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <Card
                    v-for="testimonial in testimonials"
                    :key="testimonial.name"
                    class="p-6"
                >
                    <div class="flex flex-col h-full">
                        <!-- Logo -->
                        <div class="mb-6">
                            <img
                                :src="testimonial.logo"
                                :alt="testimonial.company"
                                class="size-full max-w-[150px]"
                            >
                        </div>

                        <!-- Rating -->
                        <div class="flex gap-1 mb-4">
                            <StarIcon
                                v-for="i in testimonial.rating"
                                :key="i"
                                class="size-4 fill-yellow-400 text-yellow-400"
                            />
                        </div>

                        <!-- Quote -->
                        <blockquote class="flex-grow mb-6">
                            <p class="text-lg italic">
                                "{{ testimonial.quote }}"
                            </p>
                        </blockquote>

                        <!-- Author -->
                        <div>
                            <p class="font-semibold">
                                {{ testimonial.name }}
                            </p>
                            <p class="text-sm text-muted-foreground">
                                {{ testimonial.role }}, {{ testimonial.company }}
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Partner Grid -->
            <div class="space-y-8">
                <h3 class="text-xl font-semibold text-center">
                    More Partners Who Trust Us
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    <div
                        v-for="partner in otherPartners"
                        :key="partner.name"
                        class="group flex items-center justify-center"
                    >
                        <img
                            :src="partner.logo"
                            :alt="partner.name"
                            class="max-w-[150px] grayscale transition duration-300 group-hover:grayscale-0"
                        >
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 text-center space-y-4">
                <p class="text-muted-foreground">
                    Ready to join our success stories?
                </p>
                <Button size="lg">
                    Become a Partner
                </Button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { StarIcon } from 'lucide-vue-next'

interface Testimonial {
    name: string
    role: string
    company: string
    logo: string
    quote: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        name: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechCorp',
        logo: 'https://cdn.svglogos.dev/logos/nuxt.svg',
        quote: 'The partnership has been instrumental in our digital transformation journey.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'CEO',
        company: 'InnovateLabs',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
        quote: 'Outstanding support and cutting-edge solutions that drive real results.',
        rating: 5,
    },
    {
        name: 'Emily Brown',
        role: 'Director of Operations',
        company: 'GlobalTech',
        logo: 'https://cdn.svglogos.dev/logos/github.svg',
        quote: 'A game-changer for our business operations and customer experience.',
        rating: 4,
    },
]

const otherPartners = [
    {
        name: 'Nuxt',
        logo: 'https://cdn.svglogos.dev/logos/nuxt.svg',
    },
    {
        name: 'Astro',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
    },
    {
        name: 'Gitlab',
        logo: 'https://cdn.svglogos.dev/logos/gitlab.svg',
    },
    {
        name: 'Perplexity',
        logo: 'https://cdn.svglogos.dev/logos/perplexity.svg',
    },
    {
        name: 'Biomejs',
        logo: 'https://cdn.svglogos.dev/logos/biomejs.svg',
    },
    {
        name: 'Meta',
        logo: 'https://cdn.svglogos.dev/logos/meta.svg',
    },
]
</script>
