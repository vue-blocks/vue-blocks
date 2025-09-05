<template>
    <section class="container mx-auto py-20 space-y-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div
                :class="cn(
                    'relative text-slate-200 inline-block',
                    'text-[12rem] font-semibold leading-none',
                    'before:bg-gradient-to-t before:from-white before:absolute before:inset-0',
                )"
            >
                800+
            </div>
            <div class="relative z-10 -mt-20 mb-16">
                <div class="flex flex-col justify-center items-center gap-4">
                    <h2 class="text-3xl font-semibold md:text-4xl lg:text-5xl lg:leading-tight">
                        Don't let creativity remain at the level of ideas; unleash boundless possibilities
                    </h2>
                    <p class="text-base text-muted-foreground">
                        Flexible, modern and seamlessly compatible with Tailwind. Build the most visually striking interface with the least code, making each project both highly productive and aesthetically pleasing. Copy, paste, and go live - it's that simple.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="grid grid-cols-1 gap-2 md:gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
            <BlockCard
                v-for="block in blocks"
                :key="block.title"
                :module="block.title"
                :screenshots="block.screenshots"
                :url="block.alias"
            />
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-2">
            <Button as-child>
                <NuxtLink to="/blocks">
                    See All Blocks
                </nuxtlink>
            </Button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import BlockCard from '~/components/block/BlockCard.vue'

defineOptions({
    name: 'AppBlocks',
})

const blocks = [
    {
        title: 'Feature',
        screenshots: '/screenshots/block/feature1.png',
        alias: '/blocks/#feature',
    },
    {
        title: 'Cta',
        screenshots: '/screenshots/block/cta1.png',
        alias: '/blocks/#cta',
    },
    {
        title: 'Card',
        screenshots: '/screenshots/block/card1.png',
        alias: '/blocks/#card',
    },
    {
        title: 'Footer',
        screenshots: '/screenshots/block/footer1.png',
        alias: '/blocks/#footer',
    },
]
</script>
