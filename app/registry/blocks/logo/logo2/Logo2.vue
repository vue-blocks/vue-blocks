<template>
    <section class="container flex flex-wrap items-center justify-between gap-12 py-32">
        <p class="text-lg leading-[140%] tracking-[-0.32px] text-primary">
            Used by the world&apos;s leading companies
        </p>
        <div class="flex flex-wrap items-center gap-x-8 gap-y-6 opacity-70 grayscale lg:gap-[60px]">
            <img
                v-for="(partner, index) in partners"
                :key="index"
                :src="partner.logo"
                :alt="`${partner.name} logo`"
                :width="109"
                :height="48"
                class="object-contain"
            >
        </div>
    </section>
</template>

<script lang="ts" setup>
const partners = [
    {
        name: 'Astro',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
    },
    {
        name: 'Vercel',
        logo: 'https://cdn.svglogos.dev/logos/vercel.svg',
    },
    {
        name: 'Astro',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
    },
    {
        name: 'Supabase',
        logo: 'https://cdn.svglogos.dev/logos/supabase.svg',
    },
    {
        name: 'Import',
        logo: 'https://cdn.svglogos.dev/logos/importio.svg',
    },
]
</script>
