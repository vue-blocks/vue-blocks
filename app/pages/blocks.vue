<template>
    <section class="py-20">
        <div class="container mx-auto mt-5 mb-10">
            <div class="relative z-10">
                <h1 class="text-2xl font-semibold lg:leading-tight">
                    Vue Blocks - Specially designed for modern developers UI building blocks
                </h1>
                <p class="mt-4 text-sm text-muted-foreground">
                    All built on Tailwind CSS, it combines aesthetics, performance and flexibility. It not only enables
                    you to quickly build stunning pages, but also keeps the project structurally clear and maintainable,
                    suitable for various needs of individual developers, start-up teams, and even large enterprises.
                </p>
            </div>
        </div>

        <div class="container mx-auto text-foreground py-12 w-full [&>div]:max-w-full">
            <div class="flex flex-col justify-start items-start gap-12">
                <div
                    v-for="menu in menus as IMenu[]"
                    :key="menu.channel"
                    class="w-full"
                >
                    <div class="mb-8 flex flex-col gap-2">
                        <h3 class="text-2xl font-semibold">
                            {{ menu.channel }}
                        </h3>
                        <!--                        <p class="text-muted-foreground font-medium text-balance"> -->
                        <!--                            description -->
                        <!--                        </p> -->
                    </div>
                    <div
                        class="grid grid-cols-1 gap-2 md:gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
                    >
                        <BlockCard
                            v-for="item in menu.children"
                            :key="item.name"
                            :module="item.name"
                            :screenshots="`/screenshots/block/${item.name}.png`"
                            :url="`/block/${item.name}`"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import menus from '~/data/menus.json'
import type { IMenu } from '~/types/menus'
import BlockCard from '~/components/block/BlockCard.vue'

useSeoMeta({
    title: 'Vue Blocks - Specially designed for modern developers UI building blocks',
    description: 'All built on Tailwind CSS, it combines aesthetics, performance and flexibility. It not only enables you to quickly build stunning pages, but also keeps the project structurally clear and maintainable, suitable for various needs of individual developers, start-up teams, and even large enterprises.',
})
</script>

<style scoped>

</style>
