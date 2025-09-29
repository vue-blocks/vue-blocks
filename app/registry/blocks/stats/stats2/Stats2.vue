<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold md:text-4xl">
                    {{ heading }}
                </h2>
                <p>{{ description }}</p>
                <a
                    :href="link.url"
                    class="flex items-center gap-1 font-bold hover:underline"
                >
                    {{ link.text }}
                    <ArrowRight class="h-auto w-4" />
                </a>
            </div>
            <div class="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="stat in stats"
                    :key="stat.id"
                    class="flex flex-col gap-5"
                >
                    <div class="text-6xl font-bold">
                        {{ stat.value }}
                    </div>
                    <p>{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'

const heading = 'Platform performance insights'
const description = 'Ensuring stability and scalability for all users'
const link = {
    text: 'Read the full impact report',
    url: 'https://vue-blocks.dev',
}
const stats = [
    {
        id: 'stat-1',
        value: '250%+',
        label: 'average growth in user engagement',
    },
    {
        id: 'stat-2',
        value: '$2.5m',
        label: 'annual savings per enterprise partner',
    },
    {
        id: 'stat-3',
        value: '200+',
        label: 'integrations with top industry platforms',
    },
    {
        id: 'stat-4',
        value: '99.9%',
        label: 'customer satisfaction over the last year',
    },
]
</script>
