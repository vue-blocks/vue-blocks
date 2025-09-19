<template>
    <section class="overflow-hidden bg-muted py-32 dark:bg-muted">
        <div class="container text-center">
            <h2 class="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
                Powering the world&apos;s best product teams.
                <br>
                <span class="text-muted-foreground">
                    From next-gen startups to established enterprises.
                </span>
            </h2>
        </div>

        <div class="relative mt-10">
            <div class="flex w-full">
                <div class="flex shrink-0 animate-marquee items-center gap-12">
                    <a
                        v-for="(logo, index) in ITEMS"
                        :key="index"
                        :href="logo.href"
                        target="_blank"
                        class="p-6"
                    >
                        <img
                            :src="logo.src"
                            :alt="logo.name"
                            :width="logo.width"
                            :height="logo.height"
                            class="object-contain transition-opacity hover:opacity-70"
                        >
                    </a>
                </div>

                <div class="flex shrink-0 animate-marquee items-center gap-12">
                    <a
                        v-for="(logo, index) in ITEMS"
                        :key="index"
                        :href="logo.href"
                        target="_blank"
                        class="p-6"
                    >
                        <img
                            :src="logo.src"
                            :alt="logo.name"
                            :width="logo.width"
                            :height="logo.height"
                            class="object-contain transition-opacity hover:opacity-70"
                        >
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const ITEMS = [
    {
        name: 'astro',
        src: 'https://cdn.svglogos.dev/logos/astro.svg',
        width: 143,
        height: 26,
        href: 'https://astro.build',
    },
    {
        name: 'firebase',
        src: 'https://cdn.svglogos.dev/logos/firebase.svg',
        width: 154,
        height: 31,
        href: 'https://firebase.google.com',
    },
    {
        name: 'daisyUI',
        src: 'https://cdn.svglogos.dev/logos/daisyUI.svg',
        width: 113,
        height: 22,
        href: 'https://daisyui.com',
    },
    {
        name: 'importio',
        src: 'https://cdn.svglogos.dev/logos/importio.svg',
        width: 112,
        height: 27,
        href: 'https://www.import.io',
    },
    {
        name: 'biomejs',
        src: 'https://cdn.svglogos.dev/logos/biomejs.svg',
        width: 141,
        height: 32,
        href: 'https://biomejs.dev',
    },
    {
        name: 'hugging-face',
        src: 'https://cdn.svglogos.dev/logos/hugging-face.svg',
        width: 104,
        height: 18,
        href: 'https://huggingface.co',
    },
    {
        name: 'obsidian',
        src: 'https://cdn.svglogos.dev/logos/obsidian.svg',
        width: 105,
        height: 28,
        href: 'https://obsidian.md',
    },
    {
        name: 'dailydev',
        src: 'https://cdn.svglogos.dev/logos/dailydev.svg',
        width: 128,
        height: 33,
        href: 'https://daily.dev',
    },
    {
        name: 'netlify',
        src: 'https://cdn.svglogos.dev/logos/netlify.svg',
        width: 90,
        height: 28,
        href: 'https://www.netlify.com',
    },
]
</script>
