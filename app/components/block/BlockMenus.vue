<template>
    <div
        v-for="menu in Menus as IMenu[]"
        :key="menu.channel"
    >
        <NuxtLink
            class="group flex items-center gap-2 px-0 py-2.5 text-sm transition-colors border-l-2 border-transparent font-semibold text-foreground"
        >
            <span>{{ menu.channel }}</span>
        </NuxtLink>
        <div class="relative">
            <div
                class="before:content-[''] before:absolute before:left-0 before:top-0 before:block before:w-px before:h-full before:bg-border before:ml-0.5"
            >
                <!--                <a -->
                <!--                    class="group relative flex items-center gap-2 px-3.5 py-1 text-sm transition-colors ml-[2px] border-l hover:text-foreground hover:border-muted-foreground/50 font-semibold border-muted-foreground text-foreground" -->
                <!--                    href="/blocks/cards/statistic-cards" -->
                <!--                > -->
                <!--                    <span class="truncate">Statistic Cards</span> -->
                <!--                    <span -->
                <!--                        class="inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&amp;_svg]:-ms-px [&amp;_svg]:shrink-0 rounded-sm px-[0.325rem] h-5 min-w-5 gap-1 text-[0.6875rem] leading-[0.75rem] [&amp;_svg]:size-3 text-[var(&#45;&#45;color-success-accent,var(&#45;&#45;color-green-800))] bg-[var(&#45;&#45;color-success-soft,var(&#45;&#45;color-green-100))] dark:bg-[var(&#45;&#45;color-success-soft,var(&#45;&#45;color-green-950))] dark:text-[var(&#45;&#45;color-success-soft,var(&#45;&#45;color-green-600))] ml-auto" -->
                <!--                        data-slot="badge" -->
                <!--                    >New</span> -->
                <!--                </a> -->

                <NuxtLink
                    :class="cn(
                        'group relative flex items-center',
                        'text-sm transition-colors',
                        'gap-2 px-3.5 py-1 ml-[2px]',
                        'border-l border-transparent',
                        'text-muted-foreground hover:text-muted-foreground hover:border-transparent opacity-90',
                    )"
                >
                    <span class="truncate">List Cards</span>

                    <span
                        :class="cn(
                            'inline-flex items-center justify-center',
                            'border rounded-full size-4 border-white',
                            'bg-white',
                            // border-transparent
                            'font-medium text-xs',
                            // 'group-hover:opacity-100 opacity-0 transition-opacity duration-300',
                            'ml-auto',
                        )"
                    >2</span>
                </nuxtlink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import Menus from '~/data/menus.json'
import type { IMenu } from '~/types/menus'

defineOptions({
    name: 'BlockMenus',
})
</script>
