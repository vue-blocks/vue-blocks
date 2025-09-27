<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col items-center gap-2.5 text-center">
                <h2 class="text-4xl font-medium md:text-5xl">
                    Join our community
                </h2>
                <p class="text-muted-foreground md:text-lg">
                    Connect with others, share experiences, and stay in the loop.
                </p>
            </div>
            <div class="mx-auto mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
                <a
                    v-for="platform in platforms"
                    :key="platform.name"
                    :class="cn(
                        'bg-radial-[at_80%_14%] group relative flex h-full flex-col gap-10 overflow-hidden rounded-xl border from-[-50%] via-zinc-950 via-75% to-zinc-950 p-6',
                        platform.color === 'pink'
                            && 'from-pink-500 dark:border-pink-500/50',
                        platform.color === 'blue'
                            && 'from-blue-500 dark:border-blue-500/50',
                        platform.color === 'red'
                            && 'from-red-500 dark:border-red-500/50',
                        platform.color === 'zinc'
                            && 'from-zinc-500 dark:border-zinc-500/50',
                    )"
                    :href="platform.url"
                >
                    <div
                        class="absolute inset-0 h-full w-full shrink-0 bg-[radial-gradient(white_1px,transparent_1px)] opacity-35 [background-size:3px_3px] [mask-image:radial-gradient(ellipse_at_80%_14%,#000,transparent_40%)]"
                    />
                    <div
                        class="relative grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-b"
                        :class="cn(
                            `from-${platform.color === 'zinc' ? 'white' : `${platform.color}-500/50`}`,
                            'via-transparent',
                            `to-${platform.color === 'zinc' ? 'white' : `${platform.color}-500/50`}`,
                            'p-px',
                        )"
                    >
                        <div
                            class="grid size-full place-items-center rounded-full bg-zinc-950 bg-gradient-to-b"
                            :class="cn(
                                `from-${platform.color === 'zinc' ? 'white' : `${platform.color}-500/30`}`,
                                'via-transparent',
                                `to-${platform.color === 'zinc' ? 'white' : `${platform.color}-500/30`}`,
                            )"
                        >
                            <Icon
                                :class="platform.icon.class"
                                :icon="platform.icon.icon"
                            />
                        </div>
                    </div>
                    <div class="flex h-full flex-col justify-between">
                        <div class="mb-5">
                            <h3 class="relative text-lg font-semibold text-white">
                                {{ platform.heading }}
                            </h3>
                            <p class="mt-2 text-sm text-white/70">
                                {{ platform.description }}
                            </p>
                        </div>
                        <div
                            class="flex items-center gap-1 text-sm font-semibold text-white/90 transition-colors group-hover:text-white"
                        >
                            {{ platform.followText }}
                            <ChevronRight class="size-4.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

import { cn } from '@/lib/utils'

const platforms = [
    {
        name: 'Facebook',
        icon: {
            icon: 'mdi:facebook',
            class: 'size-6 text-blue-400/90',
        },
        color: 'blue',
        heading: 'Join our group',
        description:
            'Share your thoughts, ideas, and projects with the community.',
        followText: 'Follow us on Facebook',
        url: 'https://vue-blocks.dev',
    },
    {
        name: 'Youtube',
        icon: {
            icon: 'mdi:youtube',
            class: 'size-6 text-red-500/90',
        },
        color: 'red',
        heading: 'Join our channel',
        description: 'Watch our latest videos and keep up with the latest news.',
        followText: 'Follow us on Youtube',
        url: 'https://vue-blocks.dev',
    },
    {
        name: 'X',
        icon: {
            icon: 'ri:twitter-x-fill',
            class: 'size-5 text-white',
        },
        color: 'zinc',
        heading: 'Follow our updates',
        description: 'Get the latest news and quick updates from our team.',
        followText: 'Follow us on X',
        url: 'https://vue-blocks.dev',
    },
    {
        name: 'Instagram',
        icon: {
            icon: 'mdi:instagram',
            class: 'size-6 text-pink-400/90',
        },
        color: 'pink',
        heading: 'See our gallery',
        description: 'Browse our latest visual content and behind-the-scenes.',
        followText: 'Follow us on Instagram',
        url: 'https://vue-blocks.dev',
    },
]
</script>
