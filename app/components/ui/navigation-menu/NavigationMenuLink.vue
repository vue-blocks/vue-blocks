<script lang="ts" setup>
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from 'reka-ui'
import { NavigationMenuLink, useForwardPropsEmits } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <NavigationMenuLink
        :class="cn(
            'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground',
            'hover:bg-accent hover:text-accent-foreground',
            'focus:bg-accent focus:text-accent-foreground',
            'ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50',
            '[&_svg:not([class*=\'text-\'])]:text-muted-foreground',
            'flex flex-col gap-1 rounded-sm p-2 text-sm',
            'transition-[color,box-shadow]',
            'focus-visible:ring-4 focus-visible:outline-1',
            '[&_svg:not([class*=\'size-\'])]:size-4',
            'font-semibold',
            props.class,
        )"
        data-slot="navigation-menu-link"
        v-bind="forwarded"
    >
        <slot />
    </NavigationMenuLink>
</template>
