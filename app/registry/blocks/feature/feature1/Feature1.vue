<template>
    <section class="py-32">
        <div class="container mx-auto">
            <div class="mb-10 md:mb-20">
                <h2 class="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                    {{ heading }}
                </h2>
            </div>
            <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(reason, i) in reasons"
                    :key="i"
                    class="flex flex-col"
                >
                    <div class="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                        <Icon
                            :icon="reason.icon"
                            class="size-5"
                        />
                    </div>
                    <h3 class="mb-2 text-xl font-semibold">
                        {{ reason.title }}
                    </h3>
                    <p class="text-muted-foreground">
                        {{ reason.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

const heading = 'Why Work With Us?'

const reasons = [
    {
        title: 'Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
        icon: 'lucide:git-pull-request',
    },
    {
        title: 'Experience',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
        icon: 'lucide:square-kanban',
    },
    {
        title: 'Support',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
        icon: 'lucide:radio-tower',
    },
    {
        title: 'Innovation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
        icon: 'lucide:wand-sparkles',
    },
    {
        title: 'Results',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
        icon: 'lucide:layers',
    },
    {
        title: 'Efficiency',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?',
        icon: 'lucide:battery-charging',
    },
]
</script>
