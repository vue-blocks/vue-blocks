<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center space-y-4 mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    Partner Directory
                </h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    Explore our network of trusted partners across various industries.
                </p>
            </div>

            <!-- Tabs -->
            <Tabs
                default-value="All Partners"
                class="space-y-8"
            >
                <TabsList class="w-full flex flex-wrap justify-center gap-2">
                    <TabsTrigger
                        v-for="category in categories"
                        :key="category"
                        :value="category"
                        class="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                        {{ category }}
                    </TabsTrigger>
                </TabsList>

                <TabsContent
                    v-for="category in categories"
                    :key="category"
                    :value="category"
                >
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card
                            v-for="partner in filteredPartners(category)"
                            :key="partner.name"
                            class="p-6"
                        >
                            <div class="flex flex-col h-full">
                                <!-- Logo -->
                                <div class="mb-6">
                                    <img
                                        :src="partner.logo"
                                        :alt="partner.name"
                                        class="size-full max-w-[150px]"
                                    >
                                </div>

                                <!-- Content -->
                                <div class="flex-grow">
                                    <h3 class="text-lg font-semibold mb-2">
                                        {{ partner.name }}
                                    </h3>
                                    <p class="text-sm text-muted-foreground mb-4">
                                        {{ partner.category }}
                                    </p>

                                    <!-- Features -->
                                    <ul class="space-y-2">
                                        <li
                                            v-for="feature in partner.features"
                                            :key="feature"
                                            class="flex items-center text-sm"
                                        >
                                            <CheckIcon class="size-4 text-primary mr-2" />
                                            {{ feature }}
                                        </li>
                                    </ul>
                                </div>

                                <!-- Button -->
                                <Button
                                    variant="outline"
                                    class="w-full mt-6"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

            <!-- Bottom Text -->
            <div class="mt-16 text-center">
                <p class="text-muted-foreground mb-4">
                    Don't see your industry?
                </p>
                <Button size="lg">
                    Contact Us
                </Button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import { CheckIcon } from 'lucide-vue-next'

interface Partner {
    name: string
    logo: string
    category: string
    features: string[]
}

const categories = [
    'All Partners',
    'Developers',
    'Finance',
    'Healthcare',
    'Education',
]

const partners: Partner[] = [
    {
        name: 'Astro\n',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
        category: 'Developers',
        features: ['Cloud Solutions', 'AI Integration', '24/7 Support'],
    },
    {
        name: 'Company 2',
        logo: 'https://cdn.svglogos.dev/logos/gitlab.svg',
        category: 'Finance',
        features: ['Payment Processing', 'Risk Management', 'Global Coverage'],
    },
    {
        name: 'Company 3',
        logo: 'https://cdn.svglogos.dev/logos/daisyUI.svg',
        category: 'Healthcare',
        features: ['Patient Care', 'Medical Records', 'Compliance'],
    },
    {
        name: 'Company 4',
        logo: 'https://cdn.svglogos.dev/logos/miro.svg',
        category: 'Education',
        features: ['Online Learning', 'Student Analytics', 'Course Management'],
    },
    {
        name: 'Company 5',
        logo: 'https://cdn.svglogos.dev/logos/perplexity.svg',
        category: 'Developers',
        features: ['Cybersecurity', 'Data Protection', 'Network Solutions'],
    },
    {
        name: 'Company 6',
        logo: 'https://cdn.svglogos.dev/logos/biomejs.svg',
        category: 'Finance',
        features: ['Investment Tools', 'Portfolio Management', 'Market Analysis'],
    },
]

const filteredPartners = (category: string) => {
    if (category === 'All Partners') return partners
    return partners.filter(partner => partner.category === category)
}
</script>
