<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col items-center justify-between gap-14 md:flex-row lg:gap-20">
                <div class="basis-1/2">
                    <p class="font-mono text-sm text-muted-foreground">
                        INTEGRATIONS
                    </p>
                    <h1 class="mt-4 mb-10 text-3xl font-bold text-pretty md:text-4xl">
                        Explore integrations for your next project
                    </h1>
                    <p class="text-xl text-muted-foreground">
                        Save time and get started quickly with pre-built integrations for
                        your next project and make your life easier.
                    </p>
                    <div class="mt-5 flex items-center gap-2">
                        <Button>Get Started</Button>
                        <Button variant="outline">
                            Learn More
                            <ArrowRight class-name="size-4" />
                        </Button>
                    </div>
                </div>
                <div class="flex basis-1/2 flex-wrap justify-center gap-2 md:max-w-xl md:justify-start">
                    <div
                        v-for="(image, index) in images"
                        :key="index"
                        class="relative size-20"
                    >
                        <svg
                            class="text-muted-foreground/40"
                            viewBox="0 0 80 80"
                        >
                            <path
                                d="M75.43,79.22H4.57c-2.09,0-3.79-1.7-3.79-3.79V12.9c0-1,.4-1.98,1.11-2.68L10.22,1.89c.71-.71,1.68-1.11,2.68-1.11h62.54c2.09,0,3.79,1.7,3.79,3.79v70.87c0,2.09-1.7,3.79-3.79,3.79ZM12.9,1.78c-.73,0-1.45.3-1.97.82L2.59,10.92c-.52.52-.82,1.24-.82,1.97v62.54c0,1.54,1.25,2.79,2.79,2.79h70.87c1.54,0,2.79-1.25,2.79-2.79V4.57c0-1.54-1.25-2.79-2.79-2.79H12.9Z"
                                fill="currentColor"
                            />
                        </svg>
                        <img
                            :src="image"
                            alt="placeholder"
                            class="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2"
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

const images = [
    'https://cdn.svglogos.dev/logos/astro-icon.svg',
    'https://cdn.svglogos.dev/logos/firebase-icon.svg',
    'https://cdn.svglogos.dev/logos/gitlab-icon.svg',
    'https://cdn.svglogos.dev/logos/daisyUI-icon.svg',
    'https://cdn.svglogos.dev/logos/importio-icon.svg',
    'https://cdn.svglogos.dev/logos/bluesky.svg',
    'https://cdn.svglogos.dev/logos/miro-icon.svg',
    'https://cdn.svglogos.dev/logos/unjs.svg',
    'https://cdn.svglogos.dev/logos/biomejs-icon.svg',
    'https://cdn.svglogos.dev/logos/apidog-icon.svg',
    'https://cdn.svglogos.dev/logos/faker.svg',
    'https://cdn.svglogos.dev/logos/chartjs.svg',
    'https://cdn.svglogos.dev/logos/vueuse.svg',
    'https://cdn.svglogos.dev/logos/vue.svg',
    'https://cdn.svglogos.dev/logos/turbopack-icon.svg',
    'https://cdn.svglogos.dev/logos/vitejs.svg',
    'https://cdn.svglogos.dev/logos/react.svg',
    'https://cdn.svglogos.dev/logos/react-styleguidist.svg',
]
</script>
