<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <!-- Header -->
            <div class="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
                <div class="space-y-4 lg:max-w-xl">
                    <h2 class="text-3xl font-bold tracking-tight">
                        Trusted by Industry Leaders
                    </h2>
                    <p class="text-muted-foreground">
                        We partner with forward-thinking companies across various industries to deliver exceptional results.
                    </p>
                </div>
                <div class="flex flex-wrap gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        class="rounded-full"
                        :class="selectedCategory === 'all' ? 'bg-primary text-primary-foreground' : ''"
                        @click="selectedCategory = 'all'"
                    >
                        All
                    </Button>
                    <Button
                        v-for="category in uniqueCategories"
                        :key="category"
                        variant="outline"
                        size="sm"
                        class="rounded-full"
                        :class="selectedCategory === category ? 'bg-primary text-primary-foreground' : ''"
                        @click="selectedCategory = category"
                    >
                        {{ category }}
                    </Button>
                </div>
            </div>

            <!-- Logo Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TransitionGroup name="logo-fade">
                    <a
                        v-for="logo in filteredLogos"
                        :key="logo.name"
                        :href="logo.url"
                        class="group p-6 rounded-xl border bg-card hover:bg-accent transition-all duration-300"
                    >
                        <div class="flex flex-col gap-6">
                            <div>
                                <img
                                    :src="logo.logo"
                                    :alt="logo.name"
                                    class="size-full max-w-[100px]"
                                >
                            </div>

                            <div>
                                <h3 class="font-semibold group-hover:text-primary transition-colors">
                                    {{ logo.name }}
                                </h3>
                                <p class="mt-2 text-sm text-muted-foreground">
                                    {{ logo.description }}
                                </p>
                            </div>
                            <div class="mt-auto flex items-center text-sm font-medium text-primary">
                                Learn more
                                <ArrowRightIcon class="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </a>
                </TransitionGroup>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 flex justify-center">
                <Button
                    size="lg"
                    class="group"
                >
                    View all partners
                    <ArrowRightIcon class="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-vue-next'

interface Logo {
    name: string
    logo: string
    url: string
    category: string
    description: string
}

const selectedCategory = ref('all')

const logos: Logo[] = [
    {
        name: 'TechCorp',
        logo: 'https://cdn.svglogos.dev/logos/apidog.svg',
        url: '#',
        category: 'Technology',
        description: 'Leading provider of cloud solutions',
    },
    {
        name: 'FinanceHub',
        logo: 'https://cdn.svglogos.dev/logos/biomejs.svg',
        url: '#',
        category: 'Finance',
        description: 'Innovative financial technology',
    },
    {
        name: 'HealthTech',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
        url: '#',
        category: 'Healthcare',
        description: 'Advanced healthcare solutions',
    },
    {
        name: 'EduLearn',
        logo: 'https://cdn.svglogos.dev/logos/daisyUI.svg',
        url: '#',
        category: 'Education',
        description: 'Digital learning platforms',
    },
    {
        name: 'RetailPro',
        logo: 'https://cdn.svglogos.dev/logos/importio.svg',
        url: '#',
        category: 'Retail',
        description: 'Modern retail solutions',
    },
    {
        name: 'MediaGroup',
        logo: 'https://cdn.svglogos.dev/logos/perplexity.svg',
        url: '#',
        category: 'Media',
        description: 'Digital media services',
    },
]

const uniqueCategories = computed(() =>
    Array.from(new Set(logos.map(logo => logo.category))),
)

const filteredLogos = computed(() =>
    selectedCategory.value === 'all'
        ? logos
        : logos.filter(logo => logo.category === selectedCategory.value),
)
</script>

<style scoped>
.logo-fade-move,
.logo-fade-enter-active,
.logo-fade-leave-active {
    transition: all 0.5s ease;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.logo-fade-leave-active {
    position: absolute;
}
</style>
