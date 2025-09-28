<template>
    <section class="py-32">
        <div class="container flex flex-col items-center justify-center">
            <h2 class="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                Find Us Online
            </h2>
            <p class="mb-8 max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl">
                Connect with us on our social media platforms.
            </p>
            <div class="mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                <div
                    v-for="card in communityCards"
                    :key="card.title"
                    class="group flex flex-1 flex-col items-center gap-2 rounded-2xl border-0 bg-background p-8 transition-colors duration-200 hover:bg-muted"
                >
                    <div class="flex flex-col items-center gap-2">
                        <Icon
                            :icon="card.icon"
                            class="h-8 w-8 text-foreground/80"
                        />
                        <h5 class="mb-1 text-lg font-semibold">
                            {{ card.title }}
                        </h5>
                        <a
                            :href="card.link"
                            class="mb-1 text-xs break-all underline"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {{ card.link }}
                        </a>
                        <div class="mt-2 flex items-center justify-center gap-2">
                            <span
                                :class="cn(
                                    'h-2 w-2 rounded-full',
                                    card.status === 'online' ? 'bg-green-500' : 'bg-gray-400',
                                )"
                                :title="`${card.status === 'online' ? 'Online' : 'Offline'}`"
                            />
                            <span class="text-xs text-muted-foreground">
                                {{ card.status === 'online' ? 'Online' : 'Offline' }}
                            </span>
                            <span class="mx-2 text-xs text-muted-foreground">•</span>
                            <span class="text-xs font-medium text-foreground">
                                {{ card.followers.toLocaleString() }} followers
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/vue'

const communityCards = [
    {
        title: 'Twitter',
        icon: 'ri:twitter-x-fill',
        description: 'Follow us for updates, insights, and news',
        link: 'https://github.com/vue-blocks/vue-blocks',
        status: 'online',
        followers: 12000,
    },
    {
        title: 'GitHub',
        icon: 'mdi:github',
        description: 'Contribute, report issues, and star the project',
        link: 'https://github.com/vue-blocks/vue-blocks',
        status: 'offline',
        followers: 8000,
    },
    {
        title: 'Discord',
        icon: 'ic:baseline-discord',
        description: 'Chat, share ideas, and get support from the community',
        link: 'https://github.com/vue-blocks/vue-blocks',
        status: 'online',
        followers: 3500,
    },
    {
        title: 'LinkedIn',
        icon: 'mdi:linkedin',
        description: 'Connect with us professionally and grow your network',
        link: 'https://github.com/vue-blocks/vue-blocks',
        status: 'online',
        followers: 5000,
    },
    {
        title: 'Slack',
        icon: 'mdi:slack',
        description: 'Join our Slack for real-time collaboration',
        link: 'https://github.com/vue-blocks/vue-blocks',
        status: 'offline',
        followers: 1200,
    },
    {
        title: 'Bluesky',
        icon: 'ri:bluesky-fill',
        description: 'Connect with us on Bluesky for open social networking',
        link: 'https://github.com/vue-blocks/vue-blocks',
        status: 'online',
        followers: 900,
    },
]
</script>
