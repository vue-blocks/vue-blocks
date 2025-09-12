<template>
    <section class="relative w-full flex items-center py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <!-- Content -->
            <div class="relative">
                <!-- Header -->
                <div class="mb-12">
                    <Badge
                        class="mb-4"
                        variant="outline"
                    >
                        <Users class="mr-2 size-4" />
                        Our Experts
                    </Badge>
                    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Meet the Specialists
                    </h2>
                    <p class="mt-4 text-muted-foreground md:text-xl max-w-3xl">
                        A team of dedicated professionals bringing unique expertise to every project.
                    </p>
                </div>

                <!-- Department Tabs -->
                <Tabs
                    class="mb-12"
                    default-value="engineering"
                >
                    <TabsList>
                        <TabsTrigger
                            v-for="dept in departments"
                            :key="dept.value"
                            :value="dept.value"
                        >
                            <span class="flex items-center gap-2">
                                <component
                                    :is="dept.icon"
                                    class="size-4"
                                />
                                {{ dept.label }}
                            </span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent
                        v-for="dept in departments"
                        :key="dept.value"
                        :value="dept.value"
                        class="mt-8"
                    >
                        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card
                                v-for="member in getMembersByDepartment(dept.value)"
                                :key="member.id"
                                class="group relative overflow-hidden"
                            >
                                <!-- Card Content -->
                                <CardHeader class="relative z-10">
                                    <div class="flex items-center gap-4">
                                        <Avatar class="size-16 border-2 border-background">
                                            <AvatarImage
                                                :alt="member.name"
                                                :src="member.avatar"
                                            />
                                            <AvatarFallback>{{ member.initials }}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle>{{ member.name }}</CardTitle>
                                            <CardDescription>{{ member.role }}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent class="relative z-10">
                                    <!-- Skills -->
                                    <div class="mb-4 flex flex-wrap gap-1">
                                        <Badge
                                            v-for="skill in member.skills"
                                            :key="skill"
                                            class="text-xs"
                                            variant="secondary"
                                        >
                                            {{ skill }}
                                        </Badge>
                                    </div>

                                    <!-- Bio -->
                                    <p class="text-sm text-muted-foreground">
                                        {{ member.bio }}
                                    </p>

                                    <!-- Contact Info -->
                                    <div class="mt-4 flex items-center gap-4">
                                        <Button
                                            v-for="contact in member.contact"
                                            :key="contact.type"
                                            class="h-8 px-3"
                                            size="sm"
                                            variant="ghost"
                                        >
                                            <component
                                                :is="contact.icon"
                                                class="mr-2 size-4"
                                            />
                                            {{ contact.label }}
                                        </Button>
                                    </div>
                                </CardContent>

                                <!-- Decorative Background -->
                                <div class="absolute inset-0 z-0">
                                    <div
                                        class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    <div
                                        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                                    />
                                </div>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Code2, LineChart, Mail, MessageSquare, Palette, Users } from 'lucide-vue-next'

const departments = [
    { value: 'engineering', label: 'Engineering', icon: Code2 },
    { value: 'design', label: 'Design', icon: Palette },
    { value: 'marketing', label: 'Marketing', icon: LineChart },
]

const teamMembers = [
    {
        id: 1,
        name: 'Alex Thompson',
        initials: 'AT',
        role: 'Senior Software Engineer',
        department: 'engineering',
        avatar: 'https://mockmind-api.uifaces.co/content/human/222.jpg',
        skills: ['Vue.js', 'Node.js', 'AWS', 'TypeScript'],
        bio: 'Full-stack developer with expertise in cloud architecture and scalable systems.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'calendar', icon: Calendar, label: 'Schedule' },
        ],
    },
    {
        id: 2,
        name: 'Maria Garcia',
        initials: 'MG',
        role: 'UX Designer',
        department: 'design',
        avatar: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
        skills: ['UI/UX', 'Figma', 'User Research', 'Prototyping'],
        bio: 'Passionate about creating intuitive and accessible user experiences.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'chat', icon: MessageSquare, label: 'Chat' },
        ],
    },
    {
        id: 3,
        name: 'James Wilson',
        initials: 'JW',
        role: 'Growth Manager',
        department: 'marketing',
        avatar: 'https://mockmind-api.uifaces.co/content/human/220.jpg',
        skills: ['SEO', 'Analytics', 'Content Strategy', 'Social Media'],
        bio: 'Data-driven marketer focused on sustainable growth and user acquisition.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'calendar', icon: Calendar, label: 'Schedule' },
        ],
    },
    {
        id: 4,
        name: 'Sophie Chen',
        initials: 'SC',
        role: 'Backend Engineer',
        department: 'engineering',
        avatar: 'https://mockmind-api.uifaces.co/content/human/215.jpg',
        skills: ['Python', 'Go', 'Kubernetes', 'MongoDB'],
        bio: 'Systems architect specializing in high-performance distributed systems.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'chat', icon: MessageSquare, label: 'Chat' },
        ],
    },
    {
        id: 5,
        name: 'Lucas Silva',
        initials: 'LS',
        role: 'Product Designer',
        department: 'design',
        avatar: 'https://mockmind-api.uifaces.co/content/human/212.jpg',
        skills: ['Design Systems', 'Motion Design', 'Branding', 'Illustration'],
        bio: 'Creative designer focused on building cohesive and scalable design systems.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'calendar', icon: Calendar, label: 'Schedule' },
        ],
    },
    {
        id: 6,
        name: 'Emma Taylor',
        initials: 'ET',
        role: 'Content Strategist',
        department: 'marketing',
        avatar: 'https://mockmind-api.uifaces.co/content/human/213.jpg',
        skills: ['Content Strategy', 'Copywriting', 'Brand Voice', 'Analytics'],
        bio: 'Strategic content creator with a focus on storytelling and brand messaging.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'chat', icon: MessageSquare, label: 'Chat' },
        ],
    },
    {
        id: 7,
        name: 'David Kim',
        initials: 'DK',
        role: 'DevOps Engineer',
        department: 'engineering',
        avatar: 'https://mockmind-api.uifaces.co/content/human/201.jpg',
        skills: ['Docker', 'CI/CD', 'Terraform', 'AWS'],
        bio: 'Infrastructure specialist focused on automation and scalable cloud solutions.',
        contact: [
            { type: 'email', icon: Mail, label: 'Email' },
            { type: 'calendar', icon: Calendar, label: 'Schedule' },
        ],
    },
]

const getMembersByDepartment = (department) => {
    return teamMembers.filter(member => member.department === department)
}
</script>
