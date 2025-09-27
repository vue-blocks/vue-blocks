<template>
    <section class="py-32">
        <div class="container">
            <h2 class="mb-5 text-2xl font-semibold md:text-3xl">
                Join our community
            </h2>
            <p class="font-medium text-muted-foreground md:text-xl">
                Connect with others, share experiences, and stay in the loop.
            </p>
            <div class="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                <a
                    v-for="platform in platforms"
                    :key="platform.name"
                    class="group rounded-md border border-border p-6"
                    :href="platform.link"
                >
                    <div class="flex items-center justify-between gap-4">
                        <Icon
                            :icon="platform.icon"
                            class="size-5"
                        />
                        <ArrowUpRight
                            class="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        />
                    </div>
                    <div class="mt-4">
                        <h3 class="mb-1 font-semibold">{{ platform.name }}</h3>
                        <p class="text-sm text-muted-foreground">{{ platform.description }}</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

const platforms = [
    {
        name: 'Twitter',
        icon: 'mdi:twitter',
        description: 'Follow our latest updates and announcements.',
        link: 'https://x.com./vue-blocks',
    },
    {
        name: 'LinkedIn',
        icon: 'mdi:linkedin',
        description: 'Connect with us and explore career opportunities.',
        link: 'https://vue-blocks.dev',
    },
    {
        name: 'Github',
        icon: 'mdi:github',
        description: 'Contribute to our open-source projects.',
        link: 'https://github.com/vue-blocks/vue-blcoks',
    },
    {
        name: 'Discord',
        icon: 'ic:baseline-discord',
        description: 'Join our Discord server and connect with other developers.',
        link: 'https://vue-blocks.dev',
    },
]
</script>
