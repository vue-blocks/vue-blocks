<template>
    <section class="relative w-full flex items-center bg-background py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <!-- Left side with image -->
                <div class="w-full lg:w-1/2">
                    <img
                        class="w-full rounded-2xl shadow-xl aspect-[4/3]"
                        src="https://images.unsplash.com/photo-1757386117955-c491ad384a26?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0"
                    >
                </div>

                <!-- Right side with form -->
                <div class="w-full lg:w-1/2 space-y-8">
                    <div class="space-y-2 text-center lg:text-left">
                        <h1 class="text-5xl font-bold">
                            Welcome back
                        </h1>
                        <p class="text-muted-foreground">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form
                        class="space-y-6"
                        @submit.prevent="handleSubmit"
                    >
                        <div class="space-y-4">
                            <div class="space-y-2">
                                <Label for="email">Email</Label>
                                <div class="relative">
                                    <MailIcon class="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        v-model="formData.email"
                                        :class="{ 'border-red-500': errors.email, 'pl-10': true }"
                                        :disabled="isLoading"
                                        placeholder="Enter your email"
                                        required
                                        type="email"
                                    />
                                </div>
                                <p
                                    v-if="errors.email"
                                    class="text-sm text-red-500"
                                >
                                    {{ errors.email }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <Label for="password">Password</Label>
                                <div class="relative">
                                    <LockIcon class="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        v-model="formData.password"
                                        :class="{ 'border-red-500': errors.password, 'pl-10': true }"
                                        :disabled="isLoading"
                                        :type="showPassword ? 'text' : 'password'"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        :disabled="isLoading"
                                        class="absolute right-3 top-3"
                                        type="button"
                                        @click="showPassword = !showPassword"
                                    >
                                        <Eye
                                            v-if="!showPassword"
                                            class="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
                                        />
                                        <EyeOff
                                            v-else
                                            class="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
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
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    v-model="rememberMe"
                                    :disabled="isLoading"
                                />
                                <label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="remember"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                :class="{ 'pointer-events-none opacity-50': isLoading }"
                                class="text-sm text-primary hover:text-primary/80 transition-colors"
                                href="#"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            :disabled="isLoading"
                            class="w-full group"
                            type="submit"
                        >
                            <span
                                v-if="!isLoading"
                                class="group-hover:translate-x-0.5 transition-transform"
                            >
                                Sign in
                            </span>
                            <span
                                v-else
                                class="flex items-center justify-center"
                            >
                                <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                                Signing in...
                            </span>
                        </Button>

                        <p class="text-center text-sm text-muted-foreground">
                            Don't have an account?
                            <a
                                :class="{ 'pointer-events-none opacity-50': isLoading }"
                                class="font-medium text-primary hover:text-primary/80 transition-colors"
                                href="#"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, Loader2, LockIcon, MailIcon } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

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

const rememberMe = ref(false)
const isLoading = ref(false)
const showPassword = ref(false)

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
            toast.success('You have been successfully logged in.')
            // Reset form after successful submission
            Object.assign(formData, {
                email: '',
                password: '',
            })
            rememberMe.value = false
        }
        catch (error) {
            console.error('Login error:', error)
            toast.error('Failed to log in. Please try again.')
        }
        finally {
            isLoading.value = false
        }
    }
}
</script>
