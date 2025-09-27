<template>
    <section
        v-if="visible"
        class="animate-in fade-in slide-in-from-top-2 absolute left-0 right-0 top-4 z-50 mx-auto max-w-2xl"
    >
        <div class="mx-4">
            <div class="bg-background w-full rounded-full border p-4 shadow-md">
                <div class="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div class="flex items-center gap-4">
                        <div class="flex -space-x-2">
                            <Avatar
                                v-for="(avatar, i) in avatars"
                                :key="i"
                                class="ring-2 ring-white"
                            >
                                <AvatarImage
                                    :src="avatar.src"
                                    :alt="`User${i+1}`"
                                />
                                <AvatarFallback>{{ avatar.fallback }}</AvatarFallback>
                            </Avatar>
                        </div>
                        <p class="text-sm font-semibold">
                            {{ description }}
                        </p>
                    </div>

                    <div class="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            class="h-8 w-8 rounded-full"
                            @click="handleClose"
                        >
                            <X class="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const description = 'Used by over 2K+ customers worldwide'
const avatars = [
    { src: 'https://mockmind-api.uifaces.co/content/human/92.jpg', fallback: 'User' },
    { src: 'https://mockmind-api.uifaces.co/content/human/104.jpg', fallback: 'User' },
    { src: 'https://mockmind-api.uifaces.co/content/human/128.jpg', fallback: 'User' },
    { src: 'https://mockmind-api.uifaces.co/content/human/97.jpg', fallback: 'User' },
]
const visible = ref<boolean>(true)

const handleClose = () => {
    visible.value = !visible.value
}
</script>
