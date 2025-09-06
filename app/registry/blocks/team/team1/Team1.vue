<template>
    <section class="py-32">
        <div class="container flex flex-col items-center text-center">
            <h2 class="my-6 text-pretty text-2xl font-bold lg:text-4xl">
                {{ heading }}
            </h2>
            <p class="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
                {{ description }}
            </p>
        </div>
        <div class="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="member in members"
                :key="member.id"
                class="flex flex-col items-center"
            >
                <Avatar class="mb-4 size-20 border md:mb-5 lg:size-24">
                    <AvatarImage :src="member.avatar" />
                    <AvatarFallback>{{ member.name }}</AvatarFallback>
                </Avatar>
                <p class="text-center font-medium">
                    {{ member.name }}
                </p>
                <p class="text-muted-foreground text-center">
                    {{ member.role }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const heading = 'Team'
const description = 'Our diverse team of experts brings together decades of experience in design, engineering, and product development.'

const members = [
    {
        id: 'member-1',
        name: 'Sarah Chen',
        role: 'CEO & Founder',
        avatar: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
    },
    {
        id: 'member-2',
        name: 'Marcus Rodriguez',
        role: 'CTO',
        avatar: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
    },
    {
        id: 'member-3',
        name: 'Emily Watson',
        role: 'Head of Design',
        avatar: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
    },
    {
        id: 'member-4',
        name: 'David Kim',
        role: 'Lead Engineer',
        avatar: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
    },
    {
        id: 'member-5',
        name: 'Lisa Thompson',
        role: 'Product Manager',
        avatar: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
    },
    {
        id: 'member-6',
        name: 'Alex Johnson',
        role: 'UX Designer',
        avatar: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
    },
]
</script>
