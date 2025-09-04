<template>
    <div
        class="flex flex-col items-stretch text-card-foreground rounded-xl bg-muted border border-border shadow-xs p-1 w-4xl"
    >
        <div class="flex items-center justify-between flex-wrap px-5 min-h-14 gap-2.5">
            <div class="space-y-1">
                <h3 class="text-base font-semibold leading-none tracking-tight">
                    Recent Users
                </h3>
            </div>
        </div>
        <div class="grow p-5 bg-white rounded-t-xl [&:last-child]:rounded-b-xl py-1">
            <div
                v-for="user in users"
                :key="user.name"
                class="flex items-center justify-between gap-2 py-2 border-b border-dashed last:border-none"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="relative flex shrink-0 size-8"
                    >
                        <div class="relative overflow-hidden rounded-full">
                            <img
                                :alt="user.name"
                                :src="user.avatar"
                                class="aspect-square h-full w-full"
                                data-slot="avatar-image"
                            >
                        </div>
                    </div>
                    <div>
                        <a
                            class="text-sm font-medium text-foreground hover:text-primary"
                            href="#"
                        >{{ user.name }}</a>
                        <div class="text-sm font-normal text-muted-foreground">
                            {{ user.email }}
                        </div>
                    </div>
                </div>
                <Badge>Active</Badge>
            </div>
        </div>
        <div class="flex items-center px-5 min-h-14 bg-white rounded-b-xl mt-[2px] justify-center">
            <Button
                class="text-blue-500 underline underline-offset-4 decoration-dashed decoration-1"
                variant="link"
            >
                <a href="#">Learn more</a>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const users = [
    {
        name: 'Clara Rose',
        email: 'jennie.nichols@example.com',
        avatar: 'https://mockmind-api.uifaces.co/content/human/80.jpg',
    },
    {
        name: 'Natalie Fernandez',
        email: 'natalie.fernandez@example.com',
        avatar: 'https://mockmind-api.uifaces.co/content/human/163.jpg',
    },
    {
        name: 'Connie Caldwell',
        email: 'connie.caldwell@example.com',
        avatar: 'https://mockmind-api.uifaces.co/content/human/167.jpg',
    },
    {
        name: 'Griffin Chad',
        email: 'chad.griffin@example.com',
        avatar: 'https://mockmind-api.uifaces.co/content/human/174.jpg',
    },
    {
        name: 'Tyler Hayes',
        email: 'tyler.hayes@example.com',
        avatar: 'https://mockmind-api.uifaces.co/content/human/185.jpg',
    },
]
</script>
