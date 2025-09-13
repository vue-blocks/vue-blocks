<template>
    <section class="relative overflow-hidden py-32">
        <div class="container relative flex flex-col lg:flex-row">
            <div class="mt-10 space-y-12 lg:w-1/2">
                <!--                <p class="bg-muted w-fit rounded-full px-4 py-1 text-sm"> -->
                <!--                    version 1.0 -->
                <!--                </p> -->
                <h1 class="font-calSans mt-3 max-w-lg text-6xl font-medium lg:text-7xl">
                    <span class="opacity-30">Vue Blocks</span>
                    Unleash infinite possibilities
                </h1>
                <p class="text-muted-foreground max-w-lg text-lg">
                    Vue Blocks makes every build astonishingly fast, pushing the limits of development once again.
                </p>
                <div class="mt-10 flex gap-5">
                    <Button
                        as-child
                        class="px-4 py-2 has-[&gt;svg]:px-3 h-11"
                    >
                        <NuxtLink to="/blocks">
                            Get Blocks
                            <Icon
                                :size="24"
                                class="-rotate-45 hover:-rotate-0"
                                mode="svg"
                                name="lucide:arrow-right"
                            />
                        </NuxtLink>
                    </Button>
                </div>

                <template v-if="true">
                    <ul class="mt-18 flex flex-wrap gap-9">
                        <li
                            v-for="(stat, index) in stats"
                            :key="stat.title"
                            class="flex items-center gap-4"
                        >
                            <div class="md:size-18 flex size-12 items-center justify-center rounded-2xl border">
                                <Icon
                                    :name="stat.icon"
                                    class="size-8 stroke-1 opacity-20 md:size-10"
                                    mode="svg"
                                />
                            </div>
                            <div>
                                <h2 class="font-calSans text-2xl font-medium md:text-3xl">
                                    {{ stat.title }}
                                </h2>
                                <p class="text-sm md:text-base">
                                    {{ stat.description }}
                                </p>
                            </div>
                            <div
                                v-if="index !== stats.length - 1"
                                class="via-border ml-4 h-full w-px bg-gradient-to-t from-black to-transparent"
                            />
                        </li>
                    </ul>
                </template>
            </div>
            <div class="h-112 relative lg:w-1/2">
                <div
                    class="relative -left-35 lg:left-0 flex h-[1100px] w-[1500px] flex-col items-center justify-center lg:absolute"
                >
                    <Orbit
                        v-for="(src, index) in circle1Images"
                        :key="index"
                        :delay="20+index"
                        :direction="ORBIT_DIRECTION.CounterClockwise"
                        :duration="6"
                        :path="index===0"
                        :radius="310"
                        class="size-12"
                    >
                        <img
                            :src="src"
                            alt=""
                            class="size-full object-contain"
                        >
                    </Orbit>
                    <Orbit
                        v-for="(src, index) in circle2Images"
                        :key="index"
                        :delay="20+index"
                        :duration="6"
                        :path="index===0"
                        :radius="390"
                        class="size-12"
                    >
                        <img
                            :src="src"
                            alt=""
                            class="size-full object-contain"
                        >
                    </Orbit>
                    <Orbit
                        v-for="(src, index) in circle3Images"
                        :key="index"
                        :delay="20+index"
                        :direction="ORBIT_DIRECTION.CounterClockwise"
                        :duration="6"
                        :path="index===0"
                        :radius="470"
                        class="size-12"
                    >
                        <img
                            :src="src"
                            alt=""
                            class="size-full object-contain"
                        >
                    </Orbit>
                    <Orbit
                        v-for="(src, index) in circle4Images"
                        :key="index"
                        :delay="20+index"
                        :duration="6"
                        :path="index===0"
                        :radius="550"
                        class="size-12"
                    >
                        <img
                            :src="src"
                            alt=""
                            class="size-full object-contain"
                        >
                    </Orbit>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '~/components/ui/button'
import { Orbit, ORBIT_DIRECTION } from '~/components/ui/orbit'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error virtual
import blocks from 'virtual-blocks'

defineOptions({
    name: 'AppHero',
})

const stats = [
    // {
    //     icon: 'lucide:star',
    //     title: '+378',
    //     description: 'Github Star',
    // },
    // {
    //     icon: 'lucide:git-pull-request',
    //     title: '99.9%',
    //     description: 'Uptime ',
    // },
    {
        icon: 'lucide:boxes',
        title: `${Object.keys(blocks).length}+`,
        description: ' Blocks',
    },
]
const circle1Images = [
    'https://cdn.svglogos.dev/logos/nodejs.svg',
    'https://cdn.svglogos.dev/logos/vue.svg',
    'https://cdn.svglogos.dev/logos/vitejs.svg',
    'https://svgl.app/library/typescript.svg',
    'https://cdn.svglogos.dev/logos/esbuild.svg',
]

const circle2Images = [
    'https://cdn.svglogos.dev/logos/esbuild.svg',
    'https://cdn.svglogos.dev/logos/rollupjs.svg',
    'https://cdn.svglogos.dev/logos/vitest.svg',
    'https://cdn.svglogos.dev/logos/vueuse.svg',
    'https://cdn.svglogos.dev/logos/nuxt-icon.svg',
]

const circle3Images = [
    'https://cdn.svglogos.dev/logos/pinia.svg',
    'https://cdn.svglogos.dev/logos/github-icon.svg',
    'https://cdn.svglogos.dev/logos/solidjs-icon.svg',
    'https://cdn.svglogos.dev/logos/tailwindcss-icon.svg',
    'https://cdn.svglogos.dev/logos/unjs.svg',
]

const circle4Images = [
    'https://cdn.svglogos.dev/logos/unocss.svg',
    'https://cdn.svglogos.dev/logos/websocket.svg',
    'https://cdn.svglogos.dev/logos/slidev.svg',
    'https://cdn.svglogos.dev/logos/nvm.svg',
    'https://cdn.svglogos.dev/logos/webstorm.svg',
    'https://cdn.svglogos.dev/logos/vercel-icon.svg',
]
</script>
