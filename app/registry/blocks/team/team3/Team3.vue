<template>
    <section class="from-background to-muted/20 bg-gradient-to-b py-24 lg:py-32">
        <div class="container mx-auto px-4">
            <div class="mb-20 text-center">
                <h2 class="from-foreground to-muted-foreground mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-6xl">
                    {{ heading }}
                </h2>
                <p class="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
                    {{ description }}
                </p>
            </div>

            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="member in members"
                    :key="member.id"
                    class="bg-card border-border/50 hover:shadow-primary/10 hover:border-primary/20 group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <div
                        class="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div class="relative flex flex-col items-center text-center">
                        <div class="relative mb-6">
                            <div
                                class="from-primary/20 to-primary/10 absolute inset-0 rounded-full bg-gradient-to-r blur-xl transition-all duration-300 group-hover:blur-2xl"
                            />
                            <Avatar
                                class="ring-background group-hover:ring-primary/20 relative size-24 shadow-lg ring-4 transition-all duration-300 lg:size-28"
                            >
                                <AvatarImage
                                    :src="member.avatar"
                                    class="object-cover"
                                />
                                <AvatarFallback
                                    class="from-primary/10 to-primary/5 bg-gradient-to-br text-xl font-semibold"
                                >
                                    {{
                                        member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                    }}
                                </AvatarFallback>
                            </Avatar>
                        </div>

                        <div class="mb-6">
                            <h3 class="group-hover:text-primary mb-2 text-xl font-bold transition-colors duration-300">
                                {{ member.name }}
                            </h3>
                            <p class="text-muted-foreground bg-muted/50 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
                                {{ member.role }}
                            </p>
                        </div>

                        <div class="flex gap-3">
                            <a
                                v-if="member.github"
                                :aria-label="`${member.name}'s GitHub`"
                                :href="member.github"
                                class="bg-muted/80 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <Icon
                                    class="text-muted-foreground hover:text-primary size-5 transition-colors duration-300"
                                    icon="lucide:github"
                                />
                            </a>
                            <a
                                v-if="member.twitter"
                                :aria-label="`${member.name}'s twitter`"
                                :href="member.twitter"
                                class="bg-muted/80 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <Icon
                                    class="text-muted-foreground hover:text-primary size-5 transition-colors duration-300"
                                    icon="lucide:twitter"
                                />
                            </a>
                            <a
                                v-if="member.linkedin"
                                :aria-label="`${member.name}'s linkedin`"
                                :href="member.linkedin"
                                class="bg-muted/80 hover:bg-primary/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <Icon
                                    class="text-muted-foreground hover:text-primary size-5 transition-colors duration-300"
                                    icon="lucide:linkedin"
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
