<template>
    <section class="flex flex-col items-center gap-14 py-32">
        <nav class="container flex flex-col items-center gap-4">
            <ul class="flex flex-wrap items-center justify-center gap-6">
                <li
                    v-for="item in navigation"
                    :key="item.name"
                >
                    <a
                        :href="item.href"
                        class="font-medium transition-opacity hover:opacity-75"
                    >
                        {{ item.name }}
                    </a>
                </li>
                <li
                    v-for="item in social"
                    :key="item.name"
                >
                    <a
                        :href="item.href"
                        class="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
                    >
                        {{ item.name }}
                        <Icon
                            icon="lucide:arrow-right"
                            class="size-4"
                        />
                    </a>
                </li>
            </ul>
            <ul class="flex flex-wrap items-center justify-center gap-6">
                <li
                    v-for="item in legal"
                    :key="item.name"
                >
                    <a
                        :href="item.href"
                        class="text-sm text-muted-foreground transition-opacity hover:opacity-75"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
        <img
            alt="vue blocks"
            class="w-full h-96 mt-10 md:mt-14 lg:mt-20"
            src="https://raw.githubusercontent.com/vue-blocks/vue-blocks/refs/heads/master/public/vue-blocks.svg"
        >
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
]

const social = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
]
const legal = [
    { name: 'Privacy Policy', href: '#' },
]
</script>
