<template>
    <section class="py-24 lg:py-32">
        <div class="container mx-auto px-4">
            <div class="mb-16 text-center">
                <h2 class="mb-6 text-3xl font-bold tracking-tight lg:text-5xl">
                    {{ heading }}
                </h2>
                <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
                    {{ description }}
                </p>
            </div>

            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="member in members"
                    :key="member.id"
                    class="p-6"
                >
                    <div class="flex flex-col items-center text-center">
                        <div class="mb-4">
                            <Avatar class="size-20 lg:size-24">
                                <AvatarImage :src="member.avatar" />
                                <AvatarFallback class="text-lg font-semibold">
                                    {{ member.name }}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div class="mb-6">
                            <h3 class="mb-1 text-lg font-semibold">
                                {{ member.name }}
                            </h3>
                            <p class="text-primary text-sm font-medium">
                                {{ member.role }}
                            </p>
                        </div>

                        <div class="flex gap-3">
                            <a
                                v-if="member.github"
                                :href="member.github"
                                class="bg-muted/50 rounded-lg p-2"
                            >
                                <Icon
                                    icon="lucide:github"
                                    class="text-muted-foreground size-4"
                                />
                            </a>
                            <a
                                v-if="member.twitter"
                                :href="member.twitter"
                                class="bg-muted/50 rounded-lg p-2"
                            >
                                <Icon
                                    icon="lucide:twitter"
                                    class="text-muted-foreground size-4"
                                />
                            </a>
                            <a
                                v-if="member.linkedin"
                                :href="member.linkedin"
                                class="bg-muted/50 rounded-lg p-2"
                            >
                                <Icon
                                    icon="lucide:linkedin"
                                    class="text-muted-foreground size-4"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icon } from '@iconify/vue'

const heading = 'Team'
const description = 'Our diverse team of experts brings together decades of experience in design, engineering, and product development.'

const members = [
    {
        id: 'member-1',
        name: 'Sarah Chen',
        role: 'CEO & Founder',
        avatar: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        github: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        id: 'member-2',
        name: 'Marcus Rodriguez',
        role: 'CTO',
        avatar: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        github: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        id: 'member-3',
        name: 'Emily Watson',
        role: 'Head of Design',
        avatar: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        github: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        id: 'member-4',
        name: 'David Kim',
        role: 'Lead Engineer',
        avatar: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        github: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        id: 'member-5',
        name: 'Lisa Thompson',
        role: 'Product Manager',
        avatar: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        github: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        id: 'member-6',
        name: 'Alex Johnson',
        role: 'UX Designer',
        avatar: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
        github: '#',
        twitter: '#',
        linkedin: '#',
    },
]
</script>
