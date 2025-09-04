<template>
    <section class="py-32">
        <div class="container mx-auto p-8">
            <footer>
                <div class="grid grid-cols-2 gap-8 lg:grid-cols-6">
                    <div class="col-span-2 mb-8 lg:mb-0">
                        <div class="flex items-center gap-2 lg:justify-start">
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
                        </div>
                        <p class="mt-4 font-bold">
                            {{ tagline }}
                        </p>
                    </div>

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
                    </div>
                </div>
                <div
                    class="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center"
                >
                    <p>{{ copyright }}</p>
                    <ul class="flex gap-4">
                        <li
                            v-for="link in bottomLinks"
                            :key="link.text"
                            class="hover:text-primary underline"
                        >
                            <a :href="link.url">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    </section>
</template>

<script lang="ts" setup>
const logo = {
    src: '/logo.svg',
    alt: 'blocks for shadcn/ui',
    title: 'vue-blocks.dev',
    url: 'https://vue-blocks.dev',
}
const tagline = 'Components made easy.'
const copyright = '© 2025 vue-blocks.dev. All rights reserved.'

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
        title: 'Social',
        links: [
            { text: 'Twitter', url: '#' },
            { text: 'Instagram', url: '#' },
            { text: 'LinkedIn', url: '#' },
        ],
    },
]

const bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
]
</script>
