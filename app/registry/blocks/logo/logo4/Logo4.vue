<template>
    <section class="py-32">
        <div class="container">
            <div class="text-center">
                <Badge variant="outline">
                    Referral Partners
                </Badge>
                <h1 class="mx-auto mt-8 mb-5 max-w-3xl text-4xl font-bold text-balance md:text-6xl">
                    Join our partner network. Grow together with us.
                </h1>
                <p class="mx-auto max-w-3xl text-xl font-medium text-balance">
                    Partner with leading companies in the industry, unlock new
                    opportunities, and accelerate your business growth.
                </p>
                <Button
                    size="lg"
                    class="mt-8"
                >
                    Become a partner
                </Button>
            </div>
        </div>
        <div class="mx-auto mt-24 grid max-w-5xl grid-cols-2 place-items-center gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            <img
                v-for="logo in logos"
                :key="logo.name"
                class="grayscale"
                :src="logo.logo"
                :alt="logo.name"
                :width="144"
                :height="80"
            >
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const logos = [
    {
        name: 'Astro',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
    },
    {
        name: 'Vercel',
        logo: 'https://cdn.svglogos.dev/logos/vercel.svg',
    },
    {
        name: 'Supabase',
        logo: 'https://cdn.svglogos.dev/logos/supabase.svg',
    },
    {
        name: 'Importio',
        logo: 'https://cdn.svglogos.dev/logos/importio.svg',
    },
    {
        name: 'Miro',
        logo: 'https://cdn.svglogos.dev/logos/miro.svg',

    },
    {
        name: 'Htmx',
        logo: 'https://cdn.svglogos.dev/logos/htmx.svg',
    },
    {
        name: 'Biomejs',
        logo: 'https://cdn.svglogos.dev/logos/biomejs.svg',
    },
    {
        name: 'tailwindcss',
        logo: 'https://cdn.svglogos.dev/logos/tailwindcss.svg',
    },
]
</script>
