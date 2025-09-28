<template>
    <section class="relative overflow-hidden rounded-3xl bg-background py-32 text-foreground">
        <div class="relative z-10 container flex flex-col items-center justify-center">
            <h2 class="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                Join Our Vibrant Network
            </h2>
            <p class="mb-8 max-w-2xl text-center text-lg font-normal text-muted-foreground md:text-xl">
                Connect, collaborate, and create with passionate developers and
                creators worldwide.
            </p>
            <div class="mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
                <Card
                    v-for="card in communityCards"
                    :key="card.title"
                    class="group flex flex-1 flex-col items-center rounded-2xl bg-background p-8 transition-shadow duration-200 hover:shadow-lg"
                >
                    <a
                        :href="card.link"
                        class="flex flex-col items-center"
                        target="_blank"
                    >
                        <span
                            :class="cn(
                                'mb-4 flex items-center justify-center',
                                'h-16 w-16 rounded-full',
                                'border-2 border-dotted border-muted-foreground/40',
                                'transition-colors duration-200',
                                'group-hover:bg-muted',
                            )"
                        >
                            <Icon
                                :icon="card.icon"
                                class="h-8 w-8 text-foreground/80"
                            />
                        </span>
                        <h5 class="mb-1 text-lg font-semibold">{{ card.title }}</h5>
                        <p class="mb-2 text-center text-base text-muted-foreground">
                            {{ card.description }}
                        </p>
                    </a>
                </Card>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const communityCards = [
    {
        title: 'Twitter',
        icon: 'mdi:twitter',
        description: 'Follow us for updates, insights, and news',
        link: 'https://github.com/vue-blocks/vue-blocks',
    },
    {
        title: 'GitHub',
        icon: 'mdi:github',
        description: 'Contribute, report issues, and star the project',
        link: 'https://github.com/vue-blocks/vue-blocks',
    },
    {
        title: 'Discord',
        icon: 'ic:baseline-discord',
        description: 'Chat, share ideas, and get support from the community',
        link: 'https://github.com/vue-blocks/vue-blocks',
    },
    {
        title: 'LinkedIn',
        icon: 'mdi:linkedin',
        description: 'Connect with us professionally and grow your network',
        link: 'https://github.com/vue-blocks/vue-blocks',
    },
    {
        title: 'Slack',
        icon: 'mdi:slack',
        description: 'Join our Slack for real-time collaboration',
        link: 'https://github.com/vue-blocks/vue-blocks',
    },
    {
        title: 'Bluesky',
        icon: 'ri:bluesky-fill',
        description: 'Connect with us on Bluesky for open social networking',
        link: 'https://github.com/vue-blocks/vue-blocks',
    },
]
</script>
