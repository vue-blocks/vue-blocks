<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col items-start pb-10 md:items-center md:pb-14 xl:pb-[60px]">
                <Badge>
                    <Users class="h-4 w-4" />
                    Community
                </Badge>

                <h4 class="mt-4 text-[28px] leading-[36px] font-semibold tracking-tight text-foreground md:text-center md:text-3xl xl:text-[48px] xl:leading-[56px]">
                    Be part of our network
                </h4>

                <p class="mt-2 text-lg text-muted-foreground md:text-center xl:mt-3 xl:text-xl">
                    Engage, <span class="font-medium text-foreground">explore</span>
                    , and <span class="font-medium text-foreground">evolve</span>{{ " " }}
                    with like-minded creators and coders.
                </p>

                <div class="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-6">
                    <Card
                        v-for="platform in platforms"
                        :key="platform.name"
                        class="rounded-2xl transition-all hover:shadow-md"
                    >
                        <a
                            :href="platform.url"
                            target="_blank"
                            class="flex h-full flex-col items-center p-6 md:p-8 xl:p-10"
                        >
                            <Icon
                                :icon="platform.icon"
                                class="mb-4 h-8 w-8 md:h-12 md:w-12 xl:h-16 xl:w-16"
                            />
                            <div class="space-y-2 text-center">
                                <h5 class="text-sm font-medium md:text-lg">{{ platform.name }}</h5>
                                <p class="text-sm text-balance text-muted-foreground">{{ platform.description }}</p>
                            </div>
                        </a>
                    </Card>
                </div>

                <div class="mt-8 hidden max-w-[330px] text-center text-muted-foreground xl:block">
                    Join a network that collaborates, innovates, and thrives together.
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Users } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

const platforms = [
    {
        name: 'Twitter',
        icon: 'mdi:twitter',
        description: 'Get the latest updates, insights, and news',
        url: 'https://vue-blocks.dev',
    },
    {
        name: 'GitHub',
        icon: 'mdi:github',
        description: 'Collaborate, report issues, and enhance the project',
        url: 'https://github.com/vue-blocks/vue-blocks',
    },
    {
        name: 'Discord',
        icon: 'ic:baseline-discord',
        description: 'Chat, share ideas, and get support from the community',
        url: 'https://vue-blocks.dev',
    },
]
</script>
