<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col items-center pb-10 md:pb-14 xl:pb-[60px]">
                <Badge>
                    <Icon
                        class="mr-1 h-4 w-4"
                        icon="mdi:github"
                    />
                    GitHub Community
                </Badge>
                <h5 class="mt-4 text-xl leading-7 font-semibold tracking-tight text-foreground md:text-center xl:text-3xl">
                    Contribute to our community
                </h5>
                <p class="mt-2 text-lg text-muted-foreground md:text-center xl:mt-3 xl:text-lg">
                    Dive into our code, contribute, and join a thriving open-source
                    community.
                </p>

                <div class="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center">
                    <Card
                        class="relative flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl border border-border p-8 shadow-lg md:flex-row lg:items-center"
                    >
                        <div class="pointer-events-none absolute right-0 bottom-0 z-0 h-2/3 w-2/3">
                            <InteractiveGridPattern
                                :style="{
                                    maskImage: 'radial-gradient(circle at 100% 100%, black 60%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 60%, transparent 100%)',
                                    opacity: 0.4,
                                }"
                                class="h-full w-full"
                            />
                        </div>
                        <div class="z-10 flex flex-shrink-0 flex-col items-start">
                            <a
                                :href="GITHUB_PROFILE.url"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Icon
                                    class="mb-2 h-16 w-16 text-foreground"
                                    icon="mdi:github"
                                />
                            </a>
                            <span class="text-xl font-semibold text-foreground">
                                {{ GITHUB_PROFILE.name }}
                            </span>
                            <a
                                :href="GITHUB_PROFILE.url"
                                class="mt-1 text-sm text-muted-foreground underline hover:text-foreground"
                                target="_blank"
                            >
                                {{ GITHUB_PROFILE.url.replace("https://", "") }}
                            </a>
                        </div>
                        <div class="z-10 flex flex-1 flex-col items-start">
                            <p class="mb-4 text-left text-muted-foreground">
                                {{ GITHUB_PROFILE.description }}
                            </p>
                            <div class="flex flex-col gap-4 text-sm md:flex-row md:gap-6">
                                <div class="flex items-center gap-1">
                                    <Star class="h-4 w-4 text-yellow-400" />
                                    <span class="font-semibold text-foreground">
                                        {{ GITHUB_PROFILE.stats.stars }}
                                    </span>
                                    <span class="ml-1 text-muted-foreground">Stars</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <GitBranch class="h-4 w-4 text-muted-foreground" />
                                    <span class="font-semibold text-foreground">
                                        {{ GITHUB_PROFILE.stats.forks }}
                                    </span>
                                    <span class="ml-1 text-muted-foreground">Forks</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <Users class="h-4 w-4 text-muted-foreground" />
                                    <span class="font-semibold text-foreground">
                                        {{ GITHUB_PROFILE.stats.contributors }}
                                    </span>
                                    <span class="ml-1 text-muted-foreground">
                                        Contributors
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div class="mt-8 flex justify-center gap-4">
                    <a
                        v-for="social in socials"
                        :key="social.name"
                        :href="social.url"
                        class="flex w-24 flex-col items-center gap-2 rounded-xl border border-border bg-background p-4 transition-all hover:shadow-md"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Icon
                            class="h-6 w-6"
                            :icon="social.icon"
                        />
                        <span class="text-xs font-medium text-muted-foreground">
                            {{ social.name }}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { GitBranch, Star, Users } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

const GITHUB_PROFILE = {
    name: 'Vue Blocks',
    url: 'https://github.com/vue-blocks/vue-blocks',
    description: 'Open-source UI blocks for your next project.',
    stats: {
        stars: '4.2k',
        forks: '1.1k',
        contributors: '120+',
    },
}

const socials = [
    {
        name: 'Discord',
        icon: 'ic:baseline-discord',
        url: 'https://vue-blocks.dev',
    },
    {
        name: 'Twitter',
        icon: 'ri:twitter-x-fill',
        url: 'https://vue-blocks.dev',
    },
    {
        name: 'LinkedIn',
        icon: 'mdi:linkedin',
        url: 'https://vue-blocks.dev',
    },
]
</script>
