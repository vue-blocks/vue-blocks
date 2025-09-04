<template>
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem
                v-for="item in menus"
                :key="item.title"
            >
                <NavigationMenuLink
                    :class="navigationMenuTriggerStyle()"
                    class="bg-transparent"
                    :href="item.href"
                >
                    {{ item.title }}
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>

<script lang="ts" setup>
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

defineOptions({
    name: 'AppMenu',
})

const menus: { title: string, href: string }[] = [
    {
        title: 'Block',
        href: '/blocks',
    },
    // {
    //     title: 'Admin',
    //     href: '/admin',
    // },
    // {
    //     title: 'FullPage',
    //     href: '/fullpage',
    // },
    // {
    //     title: 'Changelog',
    //     href: '/changelog',
    // },
]
</script>

<style scoped>

</style>
