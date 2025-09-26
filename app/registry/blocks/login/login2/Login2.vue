<template>
    <section class="py-20">
        <div class="container">
            <div class="flex flex-col gap-4">
                <div class="mx-auto w-full max-w-sm rounded-md p-6 shadow-lg">
                    <div class="mb-6 flex flex-col items-center">
                        <img
                            src="/logo.svg"
                            class="mb-4 h-10 w-auto"
                            alt="vue blocks"
                        >
                        <p class="mb-2 text-2xl font-bold">
                            Vue Blocks
                        </p>
                        <p class="text-muted-foreground">
                            Register in less than 2 minutes.
                        </p>
                    </div>
                    <form
                        class="space-y-4"
                        @submit.prevent="handleSubmit"
                    >
                        <div class="grid gap-4">
                            <div class="space-y-2">
                                <Input
                                    v-model="formData.name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    :disabled="isLoading"
                                    :class="{ 'border-red-500': errors.name }"
                                />
                                <p
                                    v-if="errors.name"
                                    class="text-sm text-red-500"
                                >
                                    {{ errors.name }}
                                </p>
                            </div>

                            <div class="space-y-2">
                                <Input
                                    v-model="formData.email"
                                    type="email"
                                    placeholder="Your Email"
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

                            <div class="space-y-2">
                                <div class="relative">
                                    <Input
                                        v-model="formData.password"
                                        :type="showPassword ? 'text' : 'password'"
                                        placeholder="Your Password"
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
                                            class="size-4 text-muted-foreground"
                                        />
                                        <EyeOff
                                            v-else
                                            class="size-4 text-muted-foreground"
                                        />
                                    </button>
                                </div>
                                <div class="space-y-1">
                                    <p class="text-sm text-muted-foreground">
                                        Password requirements:
                                    </p>
                                    <ul class="text-sm space-y-1">
                                        <li :class="passwordChecks.length ? 'text-green-500' : 'text-muted-foreground'">
                                            <span class="inline-block w-4">{{ passwordChecks.length ? '✓' : '•' }}</span>
                                            Minimum 8 characters
                                        </li>
                                        <li :class="passwordChecks.hasUpperCase ? 'text-green-500' : 'text-muted-foreground'">
                                            <span class="inline-block w-4">{{ passwordChecks.hasUpperCase ? '✓' : '•' }}</span>
                                            At least one uppercase letter
                                        </li>
                                        <li :class="passwordChecks.hasNumber ? 'text-green-500' : 'text-muted-foreground'">
                                            <span class="inline-block w-4">{{ passwordChecks.hasNumber ? '✓' : '•' }}</span>
                                            At least one number
                                        </li>
                                    </ul>
                                </div>
                                <p
                                    v-if="errors.password"
                                    class="text-sm text-red-500"
                                >
                                    {{ errors.password }}
                                </p>
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
                                    Create Account
                                </span>
                                <span
                                    v-else
                                    class="flex items-center justify-center"
                                >
                                    <Loader2 class="mr-2 size-4 animate-spin" />
                                    Creating...
                                </span>
                                <ArrowRight
                                    v-if="!isLoading"
                                    class="ml-2 size-4 group-hover:translate-x-1 transition-transform"
                                />
                            </Button>

                            <Button
                                variant="outline"
                                class="w-full group"
                                :disabled="isLoading"
                                @click="signInWithGoogle"
                            >
                                <img
                                    src="https://www.google.com/favicon.ico"
                                    alt="Google Logo"
                                    class="mr-2 size-5"
                                >
                                <span class="group-hover:translate-x-0.5 transition-transform">
                                    Sign in with Google
                                </span>
                            </Button>
                        </div>
                    </form>
                    <div class="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                        <p>Already registered?</p>
                        <a
                            href="#"
                            class="font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const showPassword = ref(false)
const isLoading = ref(false)

const name = ref('John Doe')
const email = ref('user@vue-blocks.dev')
const password = ref('123456789')

const formData = reactive({
    name: name.value,
    email: email.value,
    password: password.value,
})

const errors = reactive({
    name: '',
    email: '',
    password: '',
})

const passwordChecks = computed(() => ({
    length: formData.password.length >= 8,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
}))

const validateForm = () => {
    let isValid = true

    // Name validation
    if (!formData.name) {
        errors.name = 'Please enter your name'
        isValid = false
    }
    else if (formData.name.length < 2) {
        errors.name = 'Name must be at least 2 characters long'
        isValid = false
    }
    else {
        errors.name = ''
    }

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
        errors.password = 'Please enter a password'
        isValid = false
    }
    else if (!passwordChecks.value.length) {
        errors.password = 'Password must be at least 8 characters long'
        isValid = false
    }
    else if (!passwordChecks.value.hasUpperCase) {
        errors.password = 'Password must contain at least one uppercase letter'
        isValid = false
    }
    else if (!passwordChecks.value.hasNumber) {
        errors.password = 'Password must contain at least one number'
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
            console.log('Form submitted:', formData)
            // Reset form after successful submission
            Object.assign(formData, {
                name: '',
                email: '',
                password: '',
            })
        }
        catch (error) {
            console.error('Registration error:', error)
        }
        finally {
            isLoading.value = false
        }
    }
}

const signInWithGoogle = async () => {
    try {
        isLoading.value = true
        // Simulate Google OAuth integration
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Sign in with Google clicked')
    }
    catch (error) {
        console.error('Google sign-in error:', error)
    }
    finally {
        isLoading.value = false
    }
}
</script>
