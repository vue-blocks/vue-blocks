<template>
    <Card class="bg-background w-full rounded-xl py-2">
        <CardHeader class="flex flex-row items-center space-x-4">
            <div class="relative h-12 w-12 shrink-0">
                <img
                    :alt="title"
                    :src="icon"
                    :width="48"
                    class="h-full w-full object-contain"
                    height="48"
                >
            </div>
            <div>
                <CardTitle class="text-lg">
                    {{ title }}
                </CardTitle>
                <CardDescription class="text-muted-foreground">
                    {{ description }}
                </CardDescription>
            </div>
        </CardHeader>
    </Card>
</template>

<script lang="ts" setup>
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

defineProps<{
    title: string
    description: string
    icon: string
}>()
</script>
