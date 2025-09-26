<template>
    <section class="bg-muted h-screen">
        <div class="flex h-full items-center justify-center">
            <div class="flex flex-col items-center gap-6 lg:justify-start">
                <a :href="logo.url">
                    <img
                        :src="logo.src"
                        :alt="logo.alt"
                        :title="logo.title"
                        class="h-10 dark:invert"
                    >
                </a>
                <div class="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
                    <h1 class="text-xl font-semibold">
                        {{ heading }}
                    </h1>
                    <div class="flex w-full flex-col gap-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            class="text-sm"
                            required
                        />
                    </div>
                    <div class="flex w-full flex-col gap-2">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Password"
                            class="text-sm"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        class="w-full"
                    >
                        {{ buttonText }}
                    </Button>
                </div>
                <div class="text-muted-foreground flex justify-center gap-1 text-sm">
                    <p>{{ signupText }}</p>
                    <a
                        :href="signupUrl"
                        class="text-primary font-medium hover:underline"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
