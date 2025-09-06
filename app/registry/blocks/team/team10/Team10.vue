<template>
    <section class="bg-muted/50 py-32">
        <div class="container">
            <div class="max-w-xl">
                <h2 class="mb-5 text-4xl md:text-5xl">
                    Meet Our Experts
                </h2>
                <p class="mb-12 text-muted-foreground md:text-lg">
                    Join our team of talented professionals and be part of an innovative
                    company that's shaping the future of technology through creative
                    solutions.
                </p>
                <Button size="lg">
                    Join Our Team
                </Button>
            </div>
            <div class="mt-20 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                <div
                    v-for="(member, idx) in members"
                    :key="idx"
                    class="flex items-center gap-3"
                >
                    <Avatar class="size-10 border border-border">
                        <AvatarImage :src="member.image" />
                    </Avatar>
                    <div>
                        <h3 class="text-sm font-medium">
                            {{ member.name }}
                        </h3>
                        <p class="mt-0.5 text-xs text-muted-foreground">
                            {{ member.role }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const members = [
    {
        name: 'Jane Doe',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'CEO',
    },
    {
        name: 'John Doe',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'CTO',
    },
    {
        name: 'Sarah Smith',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Head of Product',
    },
    {
        name: 'Michael John',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Lead Engineer',
    },
    {
        name: 'James Taylor',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'UX Designer',
    },
    {
        name: 'David Wilson',
        image: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
        role: 'Data Engineer',
    },
    {
        name: 'Lisa Anderson',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'UI Designer',
    },
    {
        name: 'Emily Brown',
        image: 'https://mockmind-api.uifaces.co/content/human/217.jpg',
        role: 'DevOps Engineer',
    },
    {
        name: 'Emma Davis',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'Product Manager',
    },
    {
        name: 'Robert Martin',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'General Director',
    },
    {
        name: 'Jennifer White',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'HR Manager',
    },
    {
        name: 'William Clark',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Sales Director',
    },
    {
        name: 'Patricia Moore',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Social media',
    },
    {
        name: 'Thomas Lee',
        image: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
        role: 'Security Engineer',
    },
    {
        name: 'Mike Garcia',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'Data Scientist',
    },
    {
        name: 'Richard Tom',
        image: 'https://mockmind-api.uifaces.co/content/human/217.jpg',
        role: 'QA Engineer',
    },
]
</script>
