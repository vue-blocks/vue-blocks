<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col gap-6 py-4 lg:py-8">
                <Badge
                    class="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
                    variant="outline"
                >
                    <Icon
                        class="size-4"
                        icon="lucide:users"
                    />
                    <span>Team up!</span>
                </Badge>
                <h2 class="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
                    The Minds Behind the Mission
                </h2>
                <p class="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
                    A dedicated team passionate about shaping the future of
                    productivity.
                </p>
            </div>

            <div class="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
                <div
                    v-for="member in teamMembers"
                    :key="member.name"
                    class="group flex flex-col"
                >
                    <img
                        :height="80"
                        :src="member.avatar"
                        :width="80"
                        alt="member.name"
                        class="rounded-full object-contain"
                    >
                    <div class="mt-6 flex flex-col tracking-[-0.32px]">
                        <h3 class="text-lg">
                            {{ member.name }}
                        </h3>
                        <p class="text-muted-foreground-subtle">
                            {{ member.role }}
                        </p>
                        <p class="mt-4 text-sm tracking-[-0.36px] text-muted-foreground">
                            {{ member.bio }}
                        </p>
                        <div class="mt-6 flex gap-2">
                            <a
                                v-if="member.social.twitter"
                                :href="member.social.twitter"
                                class="hover:text-foreground"
                            >
                                <Icon
                                    class="size-4"
                                    icon="lucide:twitter"
                                />
                            </a>
                            <a
                                v-if="member.social.github"
                                :href="member.social.github"
                                class="hover:text-foreground"
                            >
                                <Icon
                                    class="size-4"
                                    icon="lucide:github"
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
import { Icon } from '@iconify/vue'
import { Badge } from '@/components/ui/badge'

const teamMembers = [
    {
        name: 'Alex Johnson',
        role: 'CEO & Founder',
        avatar: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
        bio: 'With a background in software development and a vision for productivity, Alex leads the team with passion on user-first innovation.',
        social: {
            twitter: '#',
            github: '#',
        },
    },
    {
        name: 'Jamie Lee',
        role: 'Chief Product Officer',
        avatar: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
        bio: 'Jamie brings years of experience in product design and strategy, ensuring each feature meets the highest standards of functionality and design. ',
        social: {
            twitter: '#',
        },
    },
    {
        name: 'Taylor Smith',
        role: 'Head of Engineering',
        avatar: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
        bio: 'Taylor drives the technical vision, overseeing development and ensuring the product is robust, secure, and scalable for users worldwide.',
        social: {
            twitter: '#',
            github: '#',
        },
    },
    {
        name: 'Morgan Davis',
        role: 'Marketing Lead',
        avatar: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
        bio: 'With a knack for storytelling and a deep understanding of the market, Morgan communicates our mission and product benefits to the world.',
        social: {
            twitter: '#',
        },
    },
]
</script>
