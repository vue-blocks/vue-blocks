<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col gap-8">
                <h2 class="text-4xl md:text-5xl">
                    Meet Our Team
                </h2>
                <p class="max-w-2xl text-muted-foreground">
                    Our diverse group of professionals brings together expertise from
                    design, engineering, and technology to deliver innovative solutions
                    that transform ideas into reality.
                </p>
            </div>
            <div class="mt-14">
                <div class="flex flex-col justify-between gap-4 md:flex-row">
                    <Tabs
                        v-model="selectedCategory"
                        class="-mx-8 overflow-x-auto px-8"
                    >
                        <TabsList class="flex h-auto justify-start gap-4 bg-background md:flex-wrap">
                            <TabsTrigger
                                v-for="category in categories"
                                :key="category"
                                :value="category"
                                class="relative flex flex-col items-center gap-2 overflow-visible whitespace-nowrap data-[state=active]:text-foreground"
                            >
                                {{ category }}
                                <span
                                    :class="cn(
                                        'absolute -bottom-1 h-0.5 w-full bg-primary opacity-0',
                                        selectedCategory === category && 'opacity-100',
                                    )"
                                />
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div class="relative h-fit">
                        <Input
                            v-model="searchQuery"
                            class="pl-9"
                            placeholder="Search members"
                        />
                        <div class="absolute inset-y-0 flex items-center justify-center pl-3 text-muted-foreground/80">
                            <Icon
                                class="size-4"
                                icon="lucide:search"
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div
                        v-for="(member, idx) in filteredMembers"
                        :key="idx"
                        class="rounded-2xl border border-border bg-background p-7 text-center"
                    >
                        <img
                            :alt="member.name"
                            :src="member.image"
                            class="mx-auto size-28 rounded-full border border-border"
                        >
                        <div class="mt-6 flex flex-col justify-center">
                            <p class="text-xl font-medium text-primary">
                                {{ member.name }}
                            </p>
                            <p class="text-sm text-muted-foreground">
                                {{ member.role }}
                            </p>
                        </div>
                        <Separator class="my-6 bg-linear-to-r from-background via-border to-background" />
                        <p class="text-sm text-muted-foreground">
                            {{ member.yearsOfExperience }} years of experience
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

import { TabsTrigger } from 'reka-ui'
import { Icon } from '@iconify/vue'

import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList } from '@/components/ui/tabs'
import { Input } from '~/components/ui/input'

const categories = [
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'Support',
    'Leadership',
] as const

interface Member {
    name: string
    image: string
    role: string
    yearsOfExperience: number
    categories: (typeof categories)[number]
}

const members: Member[] = [
    {
        name: 'John Smith',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'CEO',
        yearsOfExperience: 15,
        categories: 'Leadership',
    },
    {
        name: 'Sarah Johnson',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'Lead Designer',
        yearsOfExperience: 8,
        categories: 'Design',
    },
    {
        name: 'Michael Chen',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Senior Engineer',
        yearsOfExperience: 10,
        categories: 'Engineering',
    },
    {
        name: 'Emily Brown',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Marketing Director',
        yearsOfExperience: 12,
        categories: 'Marketing',
    },
    {
        name: 'David Wilson',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Sales Manager',
        yearsOfExperience: 7,
        categories: 'Sales',
    },
    {
        name: 'Jessica Lee',
        image: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
        role: 'Customer Success Lead',
        yearsOfExperience: 5,
        categories: 'Support',
    },
    {
        name: 'Robert Taylor',
        image: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
        role: 'CTO',
        yearsOfExperience: 20,
        categories: 'Leadership',
    },
    {
        name: 'Amanda Martinez',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'Product Designer',
        yearsOfExperience: 6,
        categories: 'Design',
    },
    {
        name: 'James Anderson',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'Frontend Engineer',
        yearsOfExperience: 4,
        categories: 'Engineering',
    },
    {
        name: 'Lisa Wong',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'Marketing Specialist',
        yearsOfExperience: 3,
        categories: 'Marketing',
    },
    {
        name: 'Kevin Park',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Sales Representative',
        yearsOfExperience: 5,
        categories: 'Sales',
    },
    {
        name: 'Rachel Green',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Support Specialist',
        yearsOfExperience: 2,
        categories: 'Support',
    },
    {
        name: 'Thomas Wright',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Backend Engineer',
        yearsOfExperience: 8,
        categories: 'Engineering',
    },
    {
        name: 'Michelle Kim',
        image: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
        role: 'UI Designer',
        yearsOfExperience: 4,
        categories: 'Design',
    },
    {
        name: 'Daniel Garcia',
        image: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
        role: 'Marketing Manager',
        yearsOfExperience: 9,
        categories: 'Marketing',
    },
    {
        name: 'Jennifer Lopez',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'Sales Director',
        yearsOfExperience: 11,
        categories: 'Sales',
    },
    {
        name: 'Andrew Wilson',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'Support Manager',
        yearsOfExperience: 6,
        categories: 'Support',
    },
    {
        name: 'Patricia Moore',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'COO',
        yearsOfExperience: 18,
        categories: 'Leadership',
    },
    {
        name: 'Ryan Thompson',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Systems Engineer',
        yearsOfExperience: 7,
        categories: 'Engineering',
    },
    {
        name: 'Sophie Turner',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'UX Designer',
        yearsOfExperience: 5,
        categories: 'Design',
    },
    {
        name: 'Chris Evans',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Content Marketing',
        yearsOfExperience: 4,
        categories: 'Marketing',
    },
    {
        name: 'Maria Rodriguez',
        image: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
        role: 'Sales Team Lead',
        yearsOfExperience: 8,
        categories: 'Sales',
    },
    {
        name: 'Steven Clark',
        image: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
        role: 'Technical Support',
        yearsOfExperience: 3,
        categories: 'Support',
    },
    {
        name: 'Elizabeth Chen',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
        role: 'CFO',
        yearsOfExperience: 16,
        categories: 'Leadership',
    },
    {
        name: 'Alex Turner',
        image: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        role: 'DevOps Engineer',
        yearsOfExperience: 6,
        categories: 'Engineering',
    },
    {
        name: 'Nina Patel',
        image: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        role: 'Motion Designer',
        yearsOfExperience: 4,
        categories: 'Design',
    },
    {
        name: 'Sam Roberts',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        role: 'Cloud Engineer',
        yearsOfExperience: 5,
        categories: 'Engineering',
    },
    {
        name: 'Julia Zhang',
        image: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        role: 'Security Engineer',
        yearsOfExperience: 7,
        categories: 'Engineering',
    },
    {
        name: 'Marcus Johnson',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
        role: 'Mobile Engineer',
        yearsOfExperience: 6,
        categories: 'Engineering',
    },
]

const selectedCategory = ref<string>(categories[0])
const searchQuery = ref('')

const filteredMembers = computed(() => {
    return members.filter((member) => {
        const matchesCategory = selectedCategory.value === member.categories
        const matchesSearch
            = member.name.toLowerCase().includes(searchQuery.value.toLowerCase())
                || member.role.toLowerCase().includes(searchQuery.value.toLowerCase())

        return matchesCategory && matchesSearch
    })
})
</script>
