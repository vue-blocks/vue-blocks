<template>
    <section class="py-32">
        <div class="container">
            <h1 class="mb-6 text-2xl font-bold">
                Integrations
            </h1>
            <Tabs
                v-model="tab"
            >
                <TabsList class="mb-8">
                    <TabsTrigger
                        v-for="t in TABS"
                        :key="t.value"
                        :value="t.value"
                        class-name="px-4 py-2 text-sm font-medium"
                    >
                        {{ t.label }}
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    v-for="t in TABS"
                    :key="t.value"
                    :value="t.value"
                >
                    <div
                        v-for="group in grouped"
                        :key="group.category"
                        class="mb-10"
                    >
                        <h2 class="mb-1 text-lg font-semibold">
                            {{ group.category }}
                        </h2>
                        <p class="mb-4 text-sm text-muted-foreground">
                            {{ group.categoryDescription }}
                        </p>
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div
                                v-for="integration in group.integrations"
                                :key="integration.id"
                                class="flex min-h-[170px] flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div class="mb-4 flex items-center gap-4">
                                    <div
                                        class="flex h-12 w-12 flex-shrink-0 flex-grow-0 items-center justify-center rounded-md bg-muted p-2"
                                    >
                                        <img
                                            :alt="integration.title"
                                            :height="32"
                                            :src="integration.icon"
                                            :width="32"
                                            class="h-8 w-8 flex-shrink-0 flex-grow-0 object-contain"
                                        >
                                    </div>
                                    <div>
                                        <div class="text-base leading-tight font-medium">
                                            {{ integration.title }}
                                        </div>
                                        <div class="text-xs leading-snug text-muted-foreground">
                                            {{ integration.description }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-auto flex items-center justify-between gap-2">
                                    <div class="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                        >
                                            Details
                                        </Button>
                                    </div>
                                    <Switch
                                        v-model="toggles[integration.id]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Integration {
    id: number
    icon: string
    title: string
    description: string
    category: string
    categoryDescription: string
    connected: boolean
}

const INTEGRATIONS: Integration[] = [
    {
        id: 1,
        icon: 'https://cdn.svglogos.dev/logos/google-icon.svg',
        title: 'Google',
        description:
            'Offers tools for lead generation, email marketing, and customer service.',
        category: 'Sales & Marketing Tools',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of your sales and marketing activities',
        connected: true,
    },
    {
        id: 2,
        icon: 'https://cdn.svglogos.dev/logos/github-icon.svg',
        title: 'Github',
        description:
            'Provides comprehensive sales and customer relationship management.',
        category: 'Sales & Marketing Tools',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of your sales and marketing activities',
        connected: false,
    },
    {
        id: 3,
        icon: 'https://cdn.svglogos.dev/logos/spotify-icon.svg',
        title: 'Spotify',
        description:
            'Focuses on sales pipeline management with a visual pipeline management tool.',
        category: 'Sales & Marketing Tools',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of your sales and marketing activities',
        connected: false,
    },
    {
        id: 4,
        icon: 'https://cdn.svglogos.dev/logos/slack-icon.svg',
        title: 'Slack',
        description:
            'Enables real-time collaboration and updates on CRM activities.',
        category: 'Communication & Collaboration',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of team interactions and workflows',
        connected: true,
    },
    {
        id: 5,
        icon: 'https://cdn.svglogos.dev/logos/google-icon.svg',
        title: 'Google',
        description: 'Enhances communication and scheduling within the CRM.',
        category: 'Communication & Collaboration',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of team interactions and workflows',
        connected: true,
    },
    {
        id: 6,
        icon: 'https://cdn.svglogos.dev/logos/github-icon.svg',
        title: 'Github',
        description: 'Supports seamless integrated CRM inside Microsoft Teams.',
        category: 'Communication & Collaboration',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of team interactions and workflows',
        connected: false,
    },
    {
        id: 7,
        icon: 'https://cdn.svglogos.dev/logos/spotify-icon.svg',
        title: 'Spotify',
        description:
            'Provides a unified view of customer interactions and schedules.',
        category: 'Communication & Collaboration',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of team interactions and workflows',
        connected: false,
    },
    {
        id: 8,
        icon: 'https://cdn.svglogos.dev/logos/github-icon.svg',
        title: 'Github',
        description:
            'Tracks and manages customer support activities and performance.',
        category: 'Communication & Collaboration',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of team interactions and workflows',
        connected: false,
    },
    {
        id: 9,
        icon: 'https://cdn.svglogos.dev/logos/figma.svg',
        title: 'Figma',
        description: 'Streamlines customer support and ticketing within the CRM.',
        category: 'Communication & Collaboration',
        categoryDescription:
            'Enhancing the efficiency and effectiveness of team interactions and workflows',
        connected: false,
    },
]

const TABS = [
    { label: 'All Applications', value: 'all' },
    { label: 'Connected', value: 'connected' },
    { label: 'Disconnected', value: 'disconnected' },
]

type CategoryGroup = {
    category: string
    categoryDescription: string
    integrations: Integration[]
}

function groupByCategory(data: Integration[]): CategoryGroup[] {
    const map = new Map<string, CategoryGroup>()
    data.forEach((item) => {
        if (!map.has(item.category)) {
            map.set(item.category, {
                category: item.category,
                categoryDescription: item.categoryDescription,
                integrations: [],
            })
        }
        map.get(item.category)!.integrations.push(item)
    })
    return Array.from(map.values())
}

const tab = ref<string>('all')
const toggles = ref<Record<number, boolean>>(
    INTEGRATIONS.reduce((state, i) => {
        state[i.id] = i.connected
        return state
    }, {} as Record<number, boolean>),
)

const filtered = computed<Integration[]>(() => {
    if (tab.value === 'connected') {
        return INTEGRATIONS.filter(i => toggles.value[i.id])
    }
    if (tab.value === 'disconnected') {
        return INTEGRATIONS.filter(i => !toggles.value[i.id])
    }
    return INTEGRATIONS
})

const grouped = computed(() => groupByCategory(filtered.value))
</script>
