<template>
    <section class="py-32">
        <div class="container space-y-10 lg:space-y-16">
            <div class="text-center">
                <h2 class="mb-4 text-xl font-bold text-balance md:text-2xl lg:text-3xl">
                    Powering the world's best product teams.
                    <br class="max-md:hidden">
                    <span class="text-muted-foreground">
                        From next-gen startups to established enterprises.
                    </span>
                </h2>
            </div>

            <div class="flex w-full flex-col items-center gap-8">
                <div
                    class="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-4 md:gap-x-20 lg:gap-x-28"
                >
                    <a
                        v-for="(company, index) in topRowCompanies"
                        :key="index"
                        :href="company.href"
                        target="_blank"
                    >
                        <img
                            :alt="`${company.name} logo`"
                            :height="company.height"
                            :src="company.logo"
                            :width="company.width"
                            class="object-contain transition-opacity hover:opacity-70"
                        >
                    </a>
                </div>

                <div
                    class="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-5 md:gap-x-20 lg:gap-x-28"
                >
                    <a
                        v-for="(company, index) in bottomRowCompanies"
                        :key="index"
                        :href="company.href"
                        target="_blank"
                    >
                        <img
                            :alt="`${company.name} logo`"
                            :height="company.height"
                            :src="company.logo"
                            :width="company.width"
                            class="object-contain transition-opacity hover:opacity-70"
                        >
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const topRowCompanies = [
    {
        name: 'astro',
        logo: 'https://cdn.svglogos.dev/logos/astro.svg',
        width: 143,
        height: 26,
        href: 'https://astro.build',
    },
    {
        name: 'daisyUI',
        logo: 'https://cdn.svglogos.dev/logos/daisyUI.svg',
        width: 154,
        height: 31,
        href: 'https://daisyui.com',
    },
    {
        name: 'Retool',
        logo: 'https://cdn.svglogos.dev/logos/retool.svg',
        width: 113,
        height: 22,
        href: 'https://retool.com',
    },
    {
        name: 'Descript',
        logo: 'https://cdn.svglogos.dev/logos/descript.svg',
        width: 112,
        height: 27,
        href: 'https://descript.com',
    },
]

const bottomRowCompanies = [
    {
        name: 'Perplexity',
        logo: 'https://cdn.svglogos.dev/logos/perplexity.svg',
        width: 141,
        height: 32,
        href: 'https://perplexity.com',
    },
    {
        name: 'Codium',
        logo: 'https://cdn.svglogos.dev/logos/codium.svg',
        width: 104,
        height: 18,
        href: 'https://kiro.dev',
    },
    {
        name: 'Obsidian',
        logo: 'https://cdn.svglogos.dev/logos/obsidian.svg',
        width: 105,
        height: 28,
        href: 'https://obsidian.md',
    },
    {
        name: 'Incident',
        logo: 'https://cdn.svglogos.dev/logos/incident.svg',
        width: 128,
        height: 33,
        href: 'https://incident.io',
    },
    {
        name: 'builder',
        logo: 'https://cdn.svglogos.dev/logos/builder-io.svg',
        width: 90,
        height: 28,
        href: 'https://www.builder.io',
    },
]
</script>
