<template>
    <div
        :class="cn(
            'fixed z-50 h-16 w-full transition-all duration-300 top-0 text-base',
            {
                'bg-background/60 backdrop-blur-sm shadow-xs': isBeyond,
                'bg-transparent': !isBeyond,
            },
        )"
    >
        <div class="container mx-auto py-4 flex items-center justify-between">
            <NuxtLink
                class="flex items-center gap-2 leading-0"
                title="vue block"
                to="/"
            >
                <img
                    alt="logo"
                    class="size-5"
                    src="/logo.svg"
                >
                <span
                    :class="cn(
                        'font-bold text-2xl',
                        // 'bg-gradient-to-r',
                        // 'from-green-700 dark:from-indigo-400',
                        // 'to-[#35495e] dark:to-indigo-300',
                        // 'bg-clip-text text-transparent',
                    )"
                >VueBlocks</span>
            </NuxtLink>
            <div class="flex items-center gap-2 ml-auto">
                <AppMenu />
                <div
                    class="shrink-0 w-px bg-zinc-600 h-4 mx-1"
                />
                <!--                <Button as-child> -->
                <!--                    <a -->
                <!--                        class="group" -->
                <!--                        href="/blocks" -->
                <!--                    > -->
                <!--                        Get Started -->
                <!--                        <Icon -->
                <!--                            class="transition-all duration-500 group-hover:translate-x-1" -->
                <!--                            mode="svg" -->
                <!--                            name="lucide:arrow-right" -->
                <!--                        /> -->
                <!--                    </a> -->
                <!--                </Button> -->
                <!--                <div -->
                <!--                    class="shrink-0 w-px bg-zinc-600 h-4 mx-1" -->
                <!--                /> -->
                <div class="flex items-center">
                    <Button
                        as-child
                        class="px-2 h-fit"
                        variant="ghost"
                    >
                        <NuxtLink
                            :title="config.public.title"
                            :to="config.public.github"
                            target="_blank"
                        >
                            <Icon name="lucide:github" />
                        </NuxtLink>
                    </Button>
                    <!--                    <Button -->
                    <!--                        class="px-2 h-fit" -->
                    <!--                        variant="ghost" -->
                    <!--                    > -->
                    <!--                        <Icon name="lucide:sun" /> -->
                    <!--                    </Button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

defineOptions({
    name: 'AppHeader',
})

const config = useRuntimeConfig()

const { y } = useWindowScroll()
const isBeyond = computed(() => y.value > 50)
</script>
