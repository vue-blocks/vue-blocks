<template>
    <section class="from-background to-muted/20 bg-gradient-to-b py-24">
        <div class="container mx-auto px-4">
            <!-- Header Section -->
            <div class="mb-16 text-center">
                <h2 class="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
                    Team
                </h2>
                <p class="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
                    Our diverse team of experts brings together decades of experience in
                    design, engineering, and product development.
                </p>
            </div>

            <!-- Team Grid -->
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="member in team"
                    :key="member.id"
                    class="border-muted bg-card/50 hover:bg-muted group rounded-lg border p-6 backdrop-blur-sm transition-all duration-300"
                >
                    <!-- Avatar Placeholder -->
                    <div class="relative mb-6">
                        <Avatar class="mx-auto h-20 w-20">
                            <AvatarImage
                                :alt="member.name"
                                :src="member.avatar"
                            />
                            <AvatarFallback
                                class="from-primary/20 to-secondary/20 text-primary bg-gradient-to-br text-2xl font-bold"
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

                    <!-- Member Info -->
                    <div class="text-center">
                        <h3 class="group-hover:text-primary mb-1 text-lg font-semibold transition-colors">
                            {{ member.name }}
                        </h3>
                        <p class="text-primary mb-2 text-sm font-medium">
                            {{ member.role }}
                        </p>
                        <Badge
                            class="text-xs"
                            variant="outline"
                        >
                            {{ member.department }}
                        </Badge>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 border-t pt-16 text-center">
                <h3 class="mb-4 text-2xl font-semibold">
                    Ready to build the future with us?
                </h3>
                <p class="text-muted-foreground mx-auto mb-6 max-w-2xl">
                    We're always looking for talented individuals who share our passion
                    for innovation and making a difference. Check out our current
                    openings.
                </p>
                <Button
                    class="px-8"
                    size="lg"
                >
                    Explore Careers
                </Button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const team = [
    {
        id: 'person-1',
        name: 'Sarah Chen',
        role: 'CEO & Co-founder',
        department: 'Leadership',
        description:
            'Former Google PM with 10+ years building products that millions use daily. Passionate about creating meaningful impact through technology.',
        expertise: ['Product Strategy', 'Team Leadership', 'Growth'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
    },
    {
        id: 'person-2',
        name: 'Marcus Rodriguez',
        role: 'CTO & Co-founder',
        department: 'Engineering',
        description:
            'Ex-Meta engineer who led teams building infrastructure that served billions of users. Loves solving complex technical challenges.',
        expertise: ['System Architecture', 'AI/ML', 'Scalability'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
    },
    {
        id: 'person-3',
        name: 'Priya Patel',
        role: 'Head of Design',
        department: 'Design',
        description:
            'Design leader with experience at Airbnb and Figma. Believes great design should be invisible and solve real user problems.',
        expertise: ['UX Design', 'Design Systems', 'User Research'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/108.jpg',
    },
    {
        id: 'person-4',
        name: 'David Kim',
        role: 'VP of Engineering',
        department: 'Engineering',
        description:
            'Built and scaled engineering teams at Stripe and Uber. Focuses on creating high-performing teams and robust systems.',
        expertise: ['Team Building', 'Backend Systems', 'DevOps'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/125.jpg',
    },
    {
        id: 'person-5',
        name: 'Emma Thompson',
        role: 'Head of Marketing',
        department: 'Marketing',
        description:
            'Marketing strategist who grew multiple startups from 0 to millions in revenue. Expert in growth marketing and brand building.',
        expertise: ['Growth Marketing', 'Brand Strategy', 'Content'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
    },
    {
        id: 'person-6',
        name: 'Alex Johnson',
        role: 'Head of Sales',
        department: 'Sales',
        description:
            'Sales leader with a track record of building high-performing teams and exceeding revenue targets in competitive markets.',
        expertise: ['Enterprise Sales', 'Team Management', 'Customer Success'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/91.jpg',
    },
    {
        id: 'person-7',
        name: 'Priya Patel',
        role: 'Head of Design',
        department: 'Design',
        description:
            'Marketing strategist who grew multiple startups from 0 to millions in revenue. Expert in growth marketing and brand building.',
        expertise: ['Growth Marketing', 'Brand Strategy', 'Content'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
    },
    {
        id: 'person-8',
        name: 'Emma Thompson',
        role: 'Head of Marketing',
        department: 'Marketing',
        description:
            'Sales leader with a track record of building high-performing teams and exceeding revenue targets in competitive markets.',
        expertise: ['Enterprise Sales', 'Team Management', 'Customer Success'],
        avatar: 'https://mockmind-api.uifaces.co/content/human/217.jpg',
    },
]
</script>
