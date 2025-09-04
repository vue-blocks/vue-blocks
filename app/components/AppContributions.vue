<template>
    <section class="border-b py-32">
        <div class="container mx-auto space-y-5 lg:space-y-12">
            <div class="flex flex-col items-center gap-4 text-center">
                <h2 class="relative z-2 mx-auto text-3xl lg:text-6xl leading-none font-black">
                    Free and Open Source
                </h2>
                <p class="font-title font-light md:text-2xl">
                    welcomes contributions from developers around the world
                </p>
            </div>

            <div class="w-full flex justify-center items-center">
                <div class="flex w-full max-w-6xl flex-wrap justify-center gap-2">
                    <div
                        v-for="item in Array.from({ length: 29*15 }, (_, i) => i+1)"
                        :key="item"
                        class="flex items-center"
                    >
                        <AppTooltip
                            content="lonewolfyx"
                            side="top"
                        >
                            <img
                                alt="lonewolfyx"
                                class="size-8 rounded-full"
                                src="https://github.com/lonewolfyx.png"
                            >
                        </AppTooltip>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppTooltip from '~/components/AppTooltip.vue'

defineOptions({
    name: 'AppContributions',
})
</script>
