<template>
    <section class="overflow-hidden py-32">
        <div class="container">
            <h2 class="text-5xl font-medium md:text-6xl">
                Tech Pioneers <br>
                <span class="text-primary/50">building the future</span>
            </h2>
            <p class="mt-6 max-w-md text-muted-foreground">
                We bring together brilliant developers, engineers, and tech innovators
                to create groundbreaking digital solutions.
            </p>
            <Carousel>
                <div class="mt-4 hidden items-center justify-end gap-4 md:flex">
                    <CarouselPrevious class="static size-11 translate-x-0 translate-y-0" />
                    <CarouselNext class="static size-11 translate-x-0 translate-y-0" />
                </div>
                <div class="mt-16 [&>div[data-slot=carousel-content]]:overflow-visible">
                    <CarouselContent class="max-w-[min(calc(100vw-4rem),24rem)] select-none">
                        <CarouselItem
                            v-for="(member, idx) in members"
                            :key="idx"
                            class="max-w-72"
                        >
                            <div class="rounded-2xl border border-border bg-background p-7 text-center">
                                <img
                                    :alt="member.name"
                                    :src="member.image"
                                    class="mx-auto size-20 rounded-full border border-border"
                                >
                                <div class="mt-6 flex flex-col justify-center">
                                    <p class="text-lg font-medium text-primary">
                                        {{ member.name }}
                                    </p>
                                    <p class="text-sm text-muted-foreground">
                                        {{ member.role }}
                                    </p>
                                </div>
                                <Separator class="my-6 bg-linear-to-r from-background via-border to-background" />
                                <p class="text-sm text-muted-foreground">
                                    {{ member.yearsOfExperience }}+ years of experience
                                </p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </div>
            </Carousel>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'

const members = [
    {
        name: 'John Smith',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'CEO',
        yearsOfExperience: 15,
    },
    {
        name: 'Sarah Johnson',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'Lead Designer',
        yearsOfExperience: 8,
    },
    {
        name: 'Michael Chen',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Senior Engineer',
        yearsOfExperience: 10,
    },
    {
        name: 'Emily Brown',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Marketing Director',
        yearsOfExperience: 12,
    },
    {
        name: 'David Wilson',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Sales Manager',
        yearsOfExperience: 7,
    },
    {
        name: 'Jessica Lee',
        image: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
        role: 'Customer Success Lead',
        yearsOfExperience: 5,
    },
    {
        name: 'Robert Taylor',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'CTO',
        yearsOfExperience: 20,
    },
    {
        name: 'Amanda Martinez',
        image: 'https://mockmind-api.uifaces.co/content/human/217.jpg',
        role: 'Product Designer',
        yearsOfExperience: 6,
    },
    {
        name: 'James Anderson',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'Frontend Engineer',
        yearsOfExperience: 4,
    },
    {
        name: 'Lisa Wong',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'Marketing Specialist',
        yearsOfExperience: 3,
    },
    {
        name: 'Kevin Park',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Sales Representative',
        yearsOfExperience: 5,
    },
    {
        name: 'Rachel Green',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Support Specialist',
        yearsOfExperience: 2,
    },
    {
        name: 'Thomas Wright',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Backend Engineer',
        yearsOfExperience: 8,
    },
    {
        name: 'Michelle Kim',
        image: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
        role: 'UI Designer',
        yearsOfExperience: 4,
    },
    {
        name: 'Daniel Garcia',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'Marketing Manager',
        yearsOfExperience: 9,
    },
    {
        name: 'Jennifer Lopez',
        image: 'https://mockmind-api.uifaces.co/content/human/217.jpg',
        role: 'Sales Director',
        yearsOfExperience: 11,
    },
    {
        name: 'Andrew Wilson',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'Support Manager',
        yearsOfExperience: 6,
    },
    {
        name: 'Patricia Moore',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'COO',
        yearsOfExperience: 18,
    },
    {
        name: 'Ryan Thompson',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Systems Engineer',
        yearsOfExperience: 7,
    },
    {
        name: 'Sophie Turner',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'UX Designer',
        yearsOfExperience: 5,
    },
]
</script>
