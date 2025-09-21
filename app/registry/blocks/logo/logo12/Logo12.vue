<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Featured Partners
                </h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    Discover our top-rated partners who help businesses achieve exceptional results.
                </p>
            </div>

            <!-- Featured Partners Grid -->
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <Card
                    v-for="partner in featuredPartners"
                    :key="partner.name"
                    class="p-6 hover:shadow-lg transition-shadow"
                >
                    <div class="flex flex-col h-full">
                        <div class="flex items-center justify-between mb-6">
                            <div>
                                <img
                                    :src="partner.logo"
                                    :alt="partner.name"
                                    class="max-w-[150px]"
                                >
                            </div>
                            <div class="flex items-center gap-2">
                                <StarIcon class="size-5 text-yellow-400 fill-current" />
                                <span class="font-medium">{{ partner.rating }}</span>
                                <span class="text-sm text-muted-foreground">({{ partner.reviews }})</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">
                            {{ partner.name }}
                        </h3>
                        <p class="text-muted-foreground mb-6">
                            {{ partner.description }}
                        </p>
                        <Button
                            variant="outline"
                            class="mt-auto group"
                        >
                            View case studies
                            <ChevronRightIcon class="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </Card>
            </div>

            <!-- Other Partners -->
            <div class="space-y-8">
                <h3 class="text-xl font-semibold text-center">
                    Other Trusted Partners
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <a
                        v-for="partner in otherPartners"
                        :key="partner.name"
                        :href="partner.url"
                        class="group flex items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors aspect-[16/9]"
                    >
                        <img
                            :src="partner.logo"
                            :alt="partner.name"
                            class="max-w-[150px]"
                        >
                    </a>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 text-center">
                <p class="text-muted-foreground mb-4">
                    Ready to join our partner network?
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
import { ChevronRightIcon, StarIcon } from 'lucide-vue-next'

const featuredPartners = [
    {
        name: 'Company 1',
        logo: 'https://cdn.svglogos.dev/logos/google-workspace.svg',
        description: 'Enterprise cloud solutions provider',
        rating: 4.9,
        reviews: 128,
    },
    {
        name: 'Company 2',
        logo: 'https://cdn.svglogos.dev/logos/linkedin.svg',
        description: 'Leading software development firm',
        rating: 4.8,
        reviews: 96,
    },
]

const otherPartners = [
    {
        name: 'Astro',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
        url: '#',
    },
    {
        name: 'Gitlab',
        logo: 'https://cdn.svglogos.dev/logos/gitlab.svg',
        url: '#',
    },
    {
        name: 'Importio',
        logo: 'https://cdn.svglogos.dev/logos/importio.svg',
        url: '#',
    },
    {
        name: 'Apidog',
        logo: 'https://cdn.svglogos.dev/logos/apidog.svg',
        url: '#',
    },
]
</script>
