<template>
    <section class="py-32">
        <div class="container mx-auto w-full p-8">
            <footer>
                <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <a
                        :href="logo.url"
                        class="flex max-h-8 items-center gap-2"
                    >
                        <img
                            :alt="logo.title"
                            :src="logo.src"
                            :title="logo.title"
                            class="block h-10"
                        >
                        <span class="font-semibold tracking-tighter text-xl">{{ logo.title }}</span>
                    </a>
                    <div class="flex flex-col gap-4 md:flex-row md:items-center">
                        <p class="text-lg font-medium">
                            Copy the code and make it yours.
                        </p>
                        <div class="flex gap-2">
                            <a
                                class="bg-primary inline-flex items-center justify-center rounded-lg p-2"
                                href="#"
                            >
                                <Icon
                                    class="text-background size-6"
                                    icon="ri:apple-fill"
                                />
                            </a>
                            <a
                                class="bg-primary inline-flex items-center justify-center rounded-lg p-2"
                                href="#"
                            >
                                <Icon
                                    class="text-background size-6"
                                    icon="logos:google-play-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <Separator
                    class="my-14"
                    orientation="horizontal"
                />
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="(section, sectionIdx) in menuItems"
                        :key="sectionIdx"
                    >
                        <h3 class="mb-4 font-bold">
                            {{ section.title }}
                        </h3>
                        <ul class="text-muted-foreground space-y-4">
                            <li
                                v-for="(link, linkIdx) in section.links"
                                :key="linkIdx"
                                class="hover:text-primary font-medium"
                            >
                                <a :href="link.url">{{ link.text }}</a>
                            </li>
                        </ul>
                        <template v-if="section.children">
                            <h3 class="mb-4 mt-8 font-bold">
                                Social
                            </h3>
                            <ul class="text-muted-foreground flex items-center space-x-6">
                                <li
                                    v-for="(social, socialIdx) in section.children"
                                    :key="socialIdx"
                                    class="hover:text-primary font-medium"
                                >
                                    <a
                                        :href="social.url"
                                        :title="social.text"
                                    >
                                        <Icon
                                            :icon="social.icon"
                                            class="size-6"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </template>
                    </div>
                </div>
                <Separator
                    class="my-14"
                    orientation="horizontal"
                />
                <p class="text-muted-foreground text-sm">
                    {{ copyright }}
                </p>
            </footer>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Separator } from '@/components/ui/separator'

const logo = {
    src: '/logo.svg',
    alt: 'blocks for shadcn/ui',
    title: 'vue-blocks.dev',
    url: 'https://vue-blocks.dev',
}

const menuItems = [
    {
        title: 'Product',
        links: [
            { text: 'Overview', url: '#' },
            { text: 'Pricing', url: '#' },
            { text: 'Marketplace', url: '#' },
            { text: 'Features', url: '#' },
            { text: 'Integrations', url: '#' },
            { text: 'Pricing', url: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { text: 'About', url: '#' },
            { text: 'Team', url: '#' },
            { text: 'Blog', url: '#' },
            { text: 'Careers', url: '#' },
            { text: 'Contact', url: '#' },
            { text: 'Privacy', url: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { text: 'Help', url: '#' },
            { text: 'Sales', url: '#' },
            { text: 'Advertise', url: '#' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { text: 'Term of Services', url: '#' },
            { text: 'Privacy Policy', url: '#' },
        ],
        children: [
            { text: 'Twitter', url: '#', icon: 'mdi:twitter' },
            { text: 'Discord', url: '#', icon: 'ic:baseline-discord' },
            { text: 'Instagram', url: '#', icon: 'mdi:instagram' },
            { text: 'LinkedIn', url: '#', icon: 'mdi:linkedin' },
        ],
    },
]

const copyright = '© 2025 vue-blocks.dev. All rights reserved.'
</script>
