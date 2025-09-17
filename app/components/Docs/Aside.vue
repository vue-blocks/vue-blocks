<template>
    <ScrollArea
        class="relative h-full overflow-hidden text-sm"
        orientation="vertical"
        type="hover"
    >
        <template v-if="navigation?.[0]?.['children']">
            <ul
                v-for="item in navigation[0]['children']"
                :key="item.stem"
                class="flex flex-col gap-1 py-1"
            >
                <li>
                    <NuxtLink
                        v-if="!item.children"
                        :class="cn(
                            'text-foreground flex h-8 items-center gap-2 rounded-md p-2 text-sm',
                            pathname === item.path ? 'bg-sidebar-accent text-primary' : 'hover:bg-sidebar-accent hover:text-primary',
                        )"
                        :to="item.path"
                    >
                        <template v-if="item.icon">
                            <Icon
                                :icon="item.icon as string"
                            />
                        </template>

                        {{ item.title }}
                    </NuxtLink>
                    <template v-else>
                        <Collapsible
                            :default-open="true"
                            as-child
                            class="group/collapsible"
                        >
                            <li>
                                <CollapsibleTrigger
                                    :class="cn(
                                        'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
                                        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                                        'h-8 text-sm',
                                    )"
                                    :data-size="'default'"
                                    data-sidebar="menu-button"
                                >
                                    <template v-if="item.icon">
                                        <Icon
                                            :icon="item.icon as string"
                                        />
                                    </template>
                                    {{ item.title }}
                                    <ChevronRight
                                        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                    />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem
                                            v-for="subItem in item?.children"
                                            :key="subItem.title"
                                        >
                                            <SidebarMenuSubButton
                                                :is-active="pathname === subItem.path"
                                                as-child
                                            >
                                                <NuxtLink :to="subItem.path">{{ subItem.title }}</NuxtLink>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </li>
                        </Collapsible>
                    </template>
                </li>
            </ul>
        </template>
    </ScrollArea>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { Icon } from '@iconify/vue'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'
import { ChevronRight } from 'lucide-vue-next'
import { SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '~/components/ui/sidebar'

defineOptions({
    name: 'DocsAside',
})

defineProps<{
    pathname: string
}>()
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
</script>
