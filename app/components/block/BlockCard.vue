<template>
    <div class="bg-muted border border-accent rounded-xl px-5 pt-5">
        <div class="relative overflow-hidden">
            <NuxtLink
                :to="url"
                class="transition-all duration-150 ease-in"
            >
                <img
                    :alt="module"
                    :class="cn(
                        'hover:transition-all hover:duration-10 hover:scale-120',
                    )"
                    :src="screenshots"
                    class="size-full h-40 rounded-md transition-all duration-150"
                    style="transition: all .5s ease;"
                >
            </NuxtLink>
        </div>
        <div class="flex flex-wrap justify-center items-center pt-5">
            <Button class="rounded-b-none">
                {{ module }}
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

defineOptions({
    name: 'BlockCard',
})

interface IProps {
    module: string
    screenshots: string
    url: string
}

withDefaults(defineProps<IProps>(), {})
</script>
