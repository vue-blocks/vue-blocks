<template>
    <section class="bg-background h-screen">
        <div class="flex h-full items-center justify-center">
            <div class="flex flex-col items-center gap-6 lg:justify-start">
                <a :href="logo.url">
                    <img
                        :alt="logo.alt"
                        :src="logo.src"
                        :title="logo.title"
                        class="h-10 dark:invert"
                    >
                </a>
                <div class="min-w-sm flex w-full max-w-sm flex-col items-center gap-y-4 rounded-lg border px-6 py-12">
                    <Button class="w-full">
                        <img
                            alt="Google"
                            class="mr-2 size-4"
                            src="https://cdn.svglogos.dev/logos/google-icon.svg"
                        >
                        {{ googleText }}
                    </Button>

                    <div class="relative flex w-full items-center justify-center py-2">
                        <div class="border-border absolute h-[1px] w-full border-t" />
                        <span class="bg-background text-muted-foreground relative px-2 text-xs">
                            OR
                        </span>
                    </div>

                    <div class="flex w-full flex-col gap-2">
                        <Label>Email</Label>
                        <Input
                            class="bg-background text-sm"
                            placeholder="Email"
                            required
                            type="email"
                        />
                    </div>
                    <div class="flex w-full flex-col gap-2">
                        <Label>Password</Label>
                        <Input
                            class="bg-background text-sm"
                            placeholder="Password"
                            required
                            type="password"
                        />
                    </div>
                    <Button
                        class="w-full"
                        type="submit"
                        variant="secondary"
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

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const logo = {
    url: 'https://vue-blocks.dev',
    src: 'https://raw.githubusercontent.com/vue-blocks/vue-blocks/refs/heads/master/public/vue-blocks.svg',
    alt: 'logo',
    title: 'vue-blocks.dev',
}
const buttonText = 'Login'
const googleText = 'Login with Google'
const signupText = 'Need an account?'
const signupUrl = 'https://vue-blocks.dev'
</script>
