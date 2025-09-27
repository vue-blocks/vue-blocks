<template>
    <section class="bg-muted h-screen">
        <div class="flex h-full items-center justify-center">
            <div class="flex flex-col items-center gap-6 lg:justify-start">
                <a :href="logo.url">
                    <img
                        :alt="logo.alt"
                        class="h-10 dark:invert"
                        :src="logo.src"
                        :title="logo.title"
                    >
                </a>
                <div
                    class="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md"
                >
                    <h1 class="text-xl font-semibold">
                        {{ heading }}
                    </h1>
                    <Input
                        class="text-sm"
                        placeholder="Email"
                        required
                        type="email"
                    />
                    <Input
                        class="text-sm"
                        placeholder="Password"
                        required
                        type="password"
                    />
                    <Button
                        class="w-full"
                        type="submit"
                    >
                        {{ buttonText }}
                    </Button>
                </div>
                <div class="text-muted-foreground flex justify-center gap-1 text-sm">
                    <p>{{ signupText }}</p>
                    <a
                        class="text-primary font-medium hover:underline"
                        :href="signupUrl"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const heading = 'Login'
const logo = {
    url: 'https://vue-blocks.dev',
    src: 'https://raw.githubusercontent.com/vue-blocks/vue-blocks/refs/heads/master/public/vue-blocks.svg',
    alt: 'logo',
    title: 'vue-blocks.dev',
}
const buttonText = 'Login'
const signupText = 'Need an account?'
const signupUrl = 'https://vue-blocks.dev'
</script>
