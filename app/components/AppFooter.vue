<template>
    <section class="container mx-auto pb-8">
        <div
            class="mt-8 flex flex-col justify-between gap-4 text-xs font-medium text-muted-foreground md:flex-row md:items-center"
        >
            <div class="flex flex-row items-center gap-2">
                <p>
                    Constructed based on
                    <NuxtLink class="font-medium underline underline-offset-4">Shadcn/Vue</NuxtLink>
                    &
                    <NuxtLink class="font-medium underline underline-offset-4">Tailwindcss</NuxtLink>
                </p>
            </div>
            <div class="flex items-center gap-2">
                <img
                    alt="A project by @vueblock"
                    class="size-4 rounded-full"
                    src="https://github.com/lonewolfyx.png"
                >
                <span class="font-medium">A project by <NuxtLink
                    :to="config.public.github"
                    class="underline underline-offset-4 hover:opacity-80"
                    target="_blank"
                >@{{ config.public.alias }}</NuxtLink></span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'AppFooter',
})

const config = useRuntimeConfig()
</script>
