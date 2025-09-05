<template>
    <section class="py-32">
        <div class="container mx-auto max-w-7xl">
            <p class="mb-4 text-xs text-muted-foreground md:pl-5">
                {{ subheading }}
            </p>
            <h2 class="text-3xl font-medium md:pl-5 lg:text-4xl">
                {{ heading }}
            </h2>
            <div class="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
                <div
                    v-for="(feature, idx) in features"
                    :key="idx"
                    class="flex gap-6 rounded-lg md:block md:p-5"
                >
                    <span
                        class="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12"
                    >
                        <Icon
                            :icon="feature.icon"
                            class="size-4 md:size-6"
                        />
                    </span>
                    <div>
                        <h3 class="font-medium md:mb-2 md:text-xl">
                            {{ feature.title }}
                        </h3>
                        <p class="text-sm text-muted-foreground md:text-base">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const heading = 'Our Core Features'
const subheading = 'Features'

const features = [

    {
        title: 'Performance',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
        icon: 'lucide:timer',
    },
    {
        title: 'Innovation',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
        icon: 'lucide:zap',
    },
    {
        title: 'Quality',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
        icon: 'lucide:zoom-in',
    },
    {
        title: 'Accessibility',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
        icon: 'lucide:person-standing',
    },
    {
        title: 'Affordability',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
        icon: 'lucide:dollar-sign',
    },
    {
        title: 'Customer Support',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
        icon: 'lucide:message-square',
    },
]
</script>
