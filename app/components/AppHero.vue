<template>
    <div
        class="relative lg:min-h-screen bg-gradient-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden"
    >
        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col items-center max-w-5xl mx-auto gap-4 text-center">
                <!--                <span -->
                <!--                    :class="cn( -->
                <!--                        'inline-flex items-center justify-center', -->
                <!--                        'border rounded-2xl', -->
                <!--                        'text-xs font-medium w-fit whitespace-nowrap text-foreground', -->
                <!--                        'bg-muted px-3 py-2', -->
                <!--                    )" -->
                <!--                >version 1.0</span> -->
                <div class="flex flex-col items-center justify-center">
                    <h1
                        class="mx-auto items-center bg-linear-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold tracking-tight text-transparent [text-shadow:0px_1px_2px_rgba(0,0,0,0.12)] md:text-4xl lg:max-w-4xl lg:text-7xl"
                    >
                        The ultimate front-end building block library specifically designed for Vue
                    </h1>
                    <p
                        class="mx-auto items-center text-base md:text-xl text-muted-foreground md:mb-10 leading-relaxed"
                    >
                        Explore over 780 high-quality components and blocks in the Vue ecosystem specifically designed
                        for modern front-end teams. Each module is meticulously designed and developed by the team,
                        perfectly compatible with Vue 3 and Tailwind, helping you find the best balance among
                        creativity, efficiency and user experience. Build front-end interfaces that are both
                        aesthetically pleasing and high-performance at an extremely fast speed, making creativity come
                        to life instantly, empowering every project and unlocking unlimited possibilities. Just to do.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-x-6">
                        <Button>Browse Blocks</Button>
                        <Button class="bg-white text-foreground hover:text-foreground hover:bg-dark/20">
                            Browse Template
                        </Button>
                    </div>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-4 lg:gap-8 lg:mt-4">
                    <AppTooltip
                        content="Shadcn/Vue"
                        side="bottom"
                    >
                        <Icon
                            :size="24"
                            class="text-green-500"
                            mode="svg"
                            name="simple-icons:shadcnui"
                        />
                    </AppTooltip>
                    <AppTooltip
                        content="Tailwind"
                        side="bottom"
                    >
                        <Icon
                            :size="24"
                            class="text-green-500"
                            mode="svg"
                            name="logos:tailwindcss-icon"
                        />
                    </AppTooltip>
                    <AppTooltip
                        content="vue"
                        side="bottom"
                    >
                        <Icon
                            :size="24"
                            class="text-green-500"
                            mode="svg"
                            name="logos:vue"
                        />
                    </AppTooltip>
                    <AppTooltip
                        content="nuxt"
                        side="bottom"
                    >
                        <Icon
                            :size="24"
                            class="text-green-500"
                            mode="svg"
                            name="logos:nuxt-icon"
                        />
                    </AppTooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppTooltip from '~/components/AppTooltip.vue'
import { Button } from '~/components/ui/button'

defineOptions({
    name: 'AppHero',
})
</script>
