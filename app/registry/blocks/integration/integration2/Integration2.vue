<template>
    <section class="relative py-32">
        <div class="container relative flex max-w-5xl flex-col items-center text-center">
            <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Integrate Your Favourite Apps
            </h1>
            <h2 class="text-muted-foreground mb-8 max-w-3xl lg:text-2xl">
                Enhance your workflow by connecting the tools you use daily. Our
                seamless integrations help you automate tasks and keep everything in
                sync.
            </h2>
        </div>

        <div class="mx-auto mt-4 grid max-w-4xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:mt-8 lg:mt-12">
            <FeatureCard
                v-for="feature in DATA"
                :id="feature.id"
                :key="feature.id"
                :description="feature.description"
                :icon="feature.icon"
                :title="feature.title"
            />
        </div>

        <div class="mt-12 flex flex-row items-center justify-center gap-x-4">
            <span class="text-muted-foreground">
                Have a tool you'd like to integrate?
            </span>
            <Button as-child>
                <a href="https://vue-blocks.dev">Request an Integration</a>
            </Button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import FeatureCard from './FeatureCard.vue'

interface DataItem {
    id: number
    icon: string
    title: string
    description: string
}

const DATA: DataItem[] = [
    {
        id: 1,
        icon: 'https://cdn.svglogos.dev/logos/google-icon.svg',
        title: 'Google Sheets',
        description:
            'Easily sync your data with Google Sheets for seamless automation.',
    },
    {
        id: 2,
        icon: 'https://cdn.svglogos.dev/logos/slack-icon.svg',
        title: 'Slack',
        description:
            'Receive updates and notifications directly in your Slack channels.',
    },
    {
        id: 3,
        icon: 'https://cdn.svglogos.dev/logos/sketch.svg',
        title: 'Sketch',
        description:
            'Import your designs from Sketch and streamline your design process',
    },
    {
        id: 4,
        icon: 'https://cdn.svglogos.dev/logos/gatsby.svg',
        title: 'Gatsby',
        description: 'Build blazing-fast websites with Gatsby integration.',
    },
    {
        id: 5,
        icon: 'https://cdn.svglogos.dev/logos/gatsby.svg',
        title: 'Shopify',
        description:
            'Sync your Shopify store data and streamline order management.',
    },
    {
        id: 6,
        icon: 'https://cdn.svglogos.dev/logos/github-icon.svg',
        title: 'Github',
        description:
            'Automate your workflows and track changes with Github integration.',
    },
]
</script>
