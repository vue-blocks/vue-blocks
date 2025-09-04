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

        <div class="grid grid-cols-1 gap-2 md:gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <NuxtLink
                v-for="item in blocks"
                :key="item.title"
                :class="cn(
                    'p-px',
                    'transition-all duration-200',
                    'group rounded-xl',
                    'bg-linear-to-b from-gray-200 to-white',
                    // 'dark:from-gray-800 dark:to-gray-900/80',
                    // 'hover:from-blue-300 dark:hover:bg-blue-400',
                )"
                target="_blank"
            >
                <div
                    :class="cn(
                        'p-3 rounded-xl',
                        'bg-white dark:bg-gray-950/80 dark:group-hover:bg-gray-950/70',
                        'transition-all duration-500 hover:bg-accent/20',
                    )"
                >
                    <img
                        :alt="item.title"
                        :src="item.thumbnail"
                        class="size-full rounded-xl"
                    >
                    <div class="flex items-start justify-between px-2 pt-4 pb-2">
                        <h3
                            :class="cn(
                                'text-lg font-medium',
                                'transition-all duration-500',
                                'dark:text-muted',
                                // 'group-hover:text-blue-700 dark:group-hover:text-blue-600',
                            )"
                        >{{ item.title }}</h3>
                        <p class="text-sm text-muted-foreground">{{ item.components }} components</p></div>
                </div>
            </NuxtLink>
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

defineOptions({
    name: 'AppBlocks',
})

const blocks = [
    {
        title: 'Headers (Navbar)',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-navbar.svg',
    },
    {
        title: 'Hero Sections',
        components: 20,
        thumbnail: 'https://preline.co/assets/thumbnails/examples/hero-sections.webp',
    },
    {
        title: 'Features General',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-general.svg',
    },
    {
        title: 'Features Stats',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-stats.svg',
    },
    {
        title: 'Features Step',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-step.svg',
    },
    {
        title: 'Features Navs (Tabs)',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-navs.svg',
    },
    {
        title: 'Icon Blocks',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-icon-blocks.svg',
    },
    {
        title: 'Cards (Grid)',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-cards-grid.svg',
    },
    {
        title: 'Authentication',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-forms-authentication.svg',
    },
    {
        title: 'Feedback',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-forms-feedback.svg',
    },
    {
        title: 'Headers (Navbar)',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-navbar.svg',
    },
    {
        title: 'Hero Sections',
        components: 20,
        thumbnail: 'https://preline.co/assets/thumbnails/examples/hero-sections.webp',
    },
    {
        title: 'Features General',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-general.svg',
    },
    {
        title: 'Features Stats',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-stats.svg',
    },
    {
        title: 'Features Step',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-step.svg',
    },
    {
        title: 'Features Navs (Tabs)',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-features-navs.svg',
    },
    {
        title: 'Icon Blocks',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-icon-blocks.svg',
    },
    {
        title: 'Cards (Grid)',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-cards-grid.svg',
    },
    {
        title: 'Authentication',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-forms-authentication.svg',
    },
    {
        title: 'Feedback',
        components: 20,
        thumbnail: 'https://htmlstream.com/preview/front-v4.3.1/assets/svg/design-system/snippets-forms-feedback.svg',
    },
]
</script>
