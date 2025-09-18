<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col items-center justify-center gap-4 text-center">
                <h4 class="text-3xl font-medium lg:text-4xl">
                    Powering the world's best product teams
                </h4>
                <p class="text-xl text-muted-foreground lg:-mt-1">
                    From next-gen startups to established enterprises
                </p>
            </div>

            <div class="relative my-20 overflow-hidden">
                <div class="flex w-full">
                    <div class="flex shrink-0 animate-marquee items-center gap-4">
                        <a
                            v-for="logo in DATA"
                            :key="logo.key"
                            class="p-4"
                            :href="logo.href"
                            target="_blank"
                        >
                            <img
                                :alt="logo.alt"
                                class="object-contain transition-opacity hover:opacity-70"
                                :height="logo.height"
                                :src="logo.src"
                                :width="logo.width"
                            >
                        </a>
                    </div>
                    <div class="flex shrink-0 animate-marquee items-center gap-4">
                        <a
                            v-for="logo in DATA"
                            :key="logo.key"
                            class="p-4"
                            :href="logo.href"
                            target="_blank"
                        >
                            <img
                                :alt="logo.alt"
                                class="object-contain transition-opacity hover:opacity-70"
                                :height="logo.height"
                                :src="logo.src"
                                :width="logo.width"
                            >
                        </a>
                    </div>
                </div>
                <div class="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
                <div class="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
            </div>

            <div class="mt-8 flex justify-center">
                <Button class-name="rounded-full">
                    Discover all tools
                    <ArrowRight class-name="h-4 w-4" />
                </Button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'

interface DataItem {
    key: number
    src: string
    alt: string
    href: string
    width: number
    height: number
}

const DATA: DataItem[] = [
    {
        key: 1,
        src: 'https://cdn.svglogos.dev/logos/astro-icon.svg',
        alt: 'Astro',
        href: 'https://astro.build',
        width: 64,
        height: 64,
    },
    {
        key: 2,
        src: 'https://cdn.svglogos.dev/logos/github-icon.svg',
        alt: 'GitHub',
        href: 'https://github.com',
        width: 64,
        height: 64,
    },
    {
        key: 3,
        src: 'https://cdn.svglogos.dev/logos/google-icon.svg',
        alt: 'Google',
        href: 'https://google.com',
        width: 64,
        height: 64,
    },
    {
        key: 4,
        src: 'https://cdn.svglogos.dev/logos/notion-icon.svg',
        alt: 'Notion',
        href: 'https://notion.so',
        width: 64,
        height: 64,
    },
    {
        key: 5,
        src: 'https://cdn.svglogos.dev/logos/slack-icon.svg',
        alt: 'Slack',
        href: 'https://slack.com',
        width: 64,
        height: 64,
    },
    {
        key: 6,
        src: 'https://cdn.svglogos.dev/logos/tailwindcss-icon.svg',
        alt: 'Tailwind CSS',
        href: 'https://tailwindcss.com',
        width: 64,
        height: 64,
    },
    {
        key: 8,
        src: 'https://cdn.svglogos.dev/logos/webstorm.svg',
        alt: 'Web Storm',
        href: 'https://www.jetbrains.com/webstorm/',
        width: 64,
        height: 64,
    },
    {
        key: 12,
        src: 'https://cdn.svglogos.dev/logos/vueuse.svg',
        alt: 'Vue Use',
        href: 'https://vueuse.org/',
        width: 64,
        height: 64,
    },
    {
        key: 13,
        src: 'https://cdn.svglogos.dev/logos/vue.svg',
        alt: 'Vue.js',
        href: 'https://vuejs.org',
        width: 64,
        height: 64,
    },
    {
        key: 15,
        src: 'https://cdn.svglogos.dev/logos/spotify-icon.svg',
        alt: 'Spotify',
        href: 'https://spotify.com',
        width: 64,
        height: 64,
    },
    {
        key: 16,
        src: 'https://cdn.svglogos.dev/logos/dropbox.svg',
        alt: 'Dropbox',
        href: 'https://dropbox.com',
        width: 64,
        height: 64,
    },
]
</script>
