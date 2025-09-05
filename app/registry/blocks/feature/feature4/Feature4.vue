<template>
    <section class="py-32">
        <div class="container mx-auto">
            <p class="mb-4 text-sm text-muted-foreground lg:text-base">
                {{ subheading }}
            </p>
            <h2 class="text-3xl font-medium lg:text-4xl">
                {{ heading }}
            </h2>
            <div class="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
                <div
                    v-for="(feature, idx) in features"
                    :key="idx"
                    class="rounded-lg bg-accent p-5"
                >
                    <span class="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                        <Icon
                            class="size-6"
                            :icon="feature.icon"
                        />
                    </span>
                    <h3 class="mb-2 text-xl font-medium">
                        {{ feature.title }}
                    </h3>
                    <p class="leading-7 text-muted-foreground">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const heading = 'Why Choose Us?'
const subheading = 'OUR VALUES'

const features = [
    {
        title: 'Performance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.',
        icon: 'lucide:timer',
    },
    {
        title: 'Quality',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.',
        icon: 'lucide:zoom-in',
    },
    {
        title: 'Innovation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.',
        icon: 'lucide:zap',
    },
]
</script>
