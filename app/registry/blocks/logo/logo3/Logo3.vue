<template>
    <section class="py-32">
        <div class="container">
            <div class="grid overflow-hidden rounded-xl border border-border md:grid-cols-2">
                <div class="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
                    <div class="w-full md:max-w-md">
                        <h2 class="mb-4 text-2xl font-semibold lg:text-3xl">
                            Our certifications say it all.
                        </h2>
                        <p class="mb-6 text-lg">
                            In non libero bibendum odio pellentesque ullamcorper. Aenean
                            condimentum, dolor commodo pulvinar bibendum.
                        </p>
                        <Button class="w-full md:w-fit">
                            <ArrowRight class="mr-2 size-5" />
                            Get in touch
                        </Button>
                    </div>
                </div>
                <div class="grid grid-cols-3 border-t border-border md:border-t-0 md:border-l">
                    <div
                        v-for="logo in logos"
                        :key="logo.id"
                        class="-mb-px flex items-center justify-center border-r border-b border-border p-5 nth-[3n]:border-r-0 sm:p-6"
                    >
                        <img
                            :src="logo.image"
                            :alt="logo.description"
                            class="size-12 object-cover object-center sm:size-16 lg:size-24"
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'

const logos = [
    {
        id: 'logo-1',
        description: 'Logo 1',
        image: 'https://cdn.svglogos.dev/logos/astro-icon.svg',
    },
    {
        id: 'logo-2',
        description: 'Logo 2',
        image: 'https://cdn.svglogos.dev/logos/gitlab-icon.svg',
    },
    {
        id: 'logo-3',
        description: 'Logo 3',
        image: 'https://cdn.svglogos.dev/logos/daisyUI-icon.svg',
    },
    {
        id: 'logo-4',
        description: 'Logo 4',
        image: 'https://cdn.svglogos.dev/logos/bluesky.svg',
    },
    {
        id: 'logo-5',
        description: 'Logo 5',
        image: 'https://cdn.svglogos.dev/logos/miro-icon.svg',
    },
    {
        id: 'logo-6',
        description: 'Logo 6',
        image: 'https://cdn.svglogos.dev/logos/x.svg',
    },
]
</script>
