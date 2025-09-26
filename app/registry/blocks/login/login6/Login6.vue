<template>
    <section class="pb-32">
        <div class="container">
            <div class="flex flex-col gap-4">
                <div class="relative flex flex-col items-center overflow-hidden pb-2 pt-32">
                    <img
                        src="https://vue-blocks.dev/logo.svg"
                        class="mb-4 h-10 w-auto"
                        alt="vue blocks"
                    >
                    <p class="text-2xl font-bold">
                        Sign In
                    </p>
                </div>
                <div class="z-10 mx-auto w-full max-w-sm rounded-md bg-background px-6 py-12 shadow-lg">
                    <form
                        class="space-y-4"
                        @submit.prevent="handleSubmit"
                    >
                        <div class="grid gap-4">
                            <div class="grid w-full max-w-sm items-center gap-1.5">
                                <Label for="email">Email</Label>
                                <Input
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    placeholder="user@vue-blocks.dev"
                                    required
                                    :disabled="isLoading"
                                    :class="{ 'border-red-500': errors.email }"
                                />
                                <p
                                    v-if="errors.email"
                                    class="text-sm text-red-500"
                                >
                                    {{ errors.email }}
                                </p>
                            </div>

                            <div class="grid w-full max-w-sm items-center gap-1.5">
                                <Label for="password">Password</Label>
                                <div class="relative">
                                    <Input
                                        id="password"
                                        v-model="formData.password"
                                        :type="showPassword ? 'text' : 'password'"
                                        placeholder="123456789"
                                        required
                                        :disabled="isLoading"
                                        :class="{ 'border-red-500': errors.password }"
                                    />
                                    <button
                                        type="button"
                                        class="absolute right-3 top-1/2 -translate-y-1/2"
                                        :disabled="isLoading"
                                        @click="showPassword = !showPassword"
                                    >
                                        <Eye
                                            v-if="!showPassword"
                                            class="size-4 text-muted-foreground hover:text-foreground transition-colors"
                                        />
                                        <EyeOff
                                            v-else
                                            class="size-4 text-muted-foreground hover:text-foreground transition-colors"
                                        />
                                    </button>
                                </div>
                                <p
                                    v-if="errors.password"
                                    class="text-sm text-red-500"
                                >
                                    {{ errors.password }}
                                </p>
                            </div>

                            <div class="flex justify-between items-center text-sm">
                                <div class="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        v-model="rememberMe"
                                        :disabled="isLoading"
                                    />
                                    <label
                                        for="remember"
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Stay Signed In
                                    </label>
                                </div>
                                <a
                                    href="#"
                                    class="text-sm text-primary hover:text-primary/80 transition-colors"
                                    :class="{ 'pointer-events-none opacity-50': isLoading }"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            <Button
                                type="submit"
                                class="mt-2 w-full group"
                                :disabled="isLoading"
                            >
                                <span
                                    v-if="!isLoading"
                                    class="group-hover:translate-x-0.5 transition-transform"
                                >
                                    Sign In
                                </span>
                                <span
                                    v-else
                                    class="flex items-center justify-center"
                                >
                                    <Loader2 class="mr-2 size-4 animate-spin" />
                                    Signing in...
                                </span>
                            </Button>

                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <span class="w-full border-t" />
                                </div>
                                <div class="relative flex justify-center text-xs uppercase">
                                    <span class="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-4">
                                <Button
                                    variant="outline"
                                    class="group"
                                    :disabled="isLoading"
                                    @click="signInWithGoogle"
                                >
                                    <img
                                        src="https://www.google.com/favicon.ico"
                                        alt="Google Logo"
                                        class="mr-2 size-4"
                                    >
                                    <span
                                        v-if="!isLoadingGoogle"
                                        class="group-hover:translate-x-0.5 transition-transform"
                                    >
                                        Google
                                    </span>
                                    <span
                                        v-else
                                        class="flex items-center"
                                    >
                                        <Loader2 class="size-4 animate-spin" />
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    class="group"
                                    :disabled="isLoading"
                                    @click="signInWithGithub"
                                >
                                    <Github
                                        v-if="!isLoadingGithub"
                                        class="mr-2 size-4"
                                    />
                                    <Loader2
                                        v-else
                                        class="mr-2 size-4 animate-spin"
                                    />
                                    <span
                                        v-if="!isLoadingGithub"
                                        class="group-hover:translate-x-0.5 transition-transform"
                                    >
                                        GitHub
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mx-auto mt-3 flex justify-center gap-1 text-sm text-muted-foreground">
                    <p>No account yet?</p>
                    <a
                        href="#"
                        class="font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Eye, EyeOff, Github, Loader2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)
const isLoadingGoogle = ref(false)
const isLoadingGithub = ref(false)

const email = ref('user@vue-blocks.dev')
const password = ref('123456789')

const formData = reactive({
    email: email.value,
    password: password.value,
})

const errors = reactive({
    email: '',
    password: '',
})

const validateForm = () => {
    let isValid = true

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
        errors.email = 'Please enter your email address'
        isValid = false
    }
    else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }
    else {
        errors.email = ''
    }

    // Password validation
    if (!formData.password) {
        errors.password = 'Please enter your password'
        isValid = false
    }
    else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters'
        isValid = false
    }
    else {
        errors.password = ''
    }

    return isValid
}

const handleSubmit = async () => {
    if (validateForm()) {
        try {
            isLoading.value = true
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log('Form submitted:', {
                ...formData,
                rememberMe: rememberMe.value,
            })
            // Reset form after successful submission
            Object.assign(formData, {
                email: 'user@vue-blocks.dev',
                password: '123456789',
            })
            rememberMe.value = false
        }
        catch (error) {
            console.error('Login error:', error)
        }
        finally {
            isLoading.value = false
        }
    }
}

const signInWithGoogle = async () => {
    try {
        isLoadingGoogle.value = true
        // Simulate Google OAuth integration
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Sign in with Google clicked')
    }
    catch (error) {
        console.error('Google sign-in error:', error)
    }
    finally {
        isLoadingGoogle.value = false
    }
}

const signInWithGithub = async () => {
    try {
        isLoadingGithub.value = true
        // Simulate GitHub OAuth integration
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Sign in with GitHub clicked')
    }
    catch (error) {
        console.error('GitHub sign-in error:', error)
    }
    finally {
        isLoadingGithub.value = false
    }
}
</script>
