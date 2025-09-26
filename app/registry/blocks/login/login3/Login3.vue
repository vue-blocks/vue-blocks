<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="max-w-md mx-auto space-y-8">
                <div class="text-center space-y-2">
                    <h1 class="text-3xl font-bold">
                        Create an account
                    </h1>
                    <p class="text-gray-500">
                        Sign up to get started with our platform
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <Button
                        variant="outline"
                        class="w-full"
                        @click="handleSocialLogin('github')"
                    >
                        <GithubIcon class="mr-2 h-4 w-4" />
                        GitHub
                    </Button>
                    <Button
                        variant="outline"
                        class="w-full"
                        @click="handleSocialLogin('twitter')"
                    >
                        <TwitterIcon class="mr-2 h-4 w-4" />
                        Twitter
                    </Button>
                </div>

                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <span class="w-full border-t" />
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                        <span class="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <form
                    class="space-y-6"
                    @submit.prevent="handleSubmit"
                >
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <Label for="name">Full Name</Label>
                            <div class="relative">
                                <UserIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                    id="name"
                                    v-model="formData.name"
                                    type="text"
                                    placeholder="John Doe"
                                    :class="{ 'border-destructive': errors.name }"
                                    class="pl-10"
                                    required
                                />
                            </div>
                            <p
                                v-if="errors.name"
                                class="text-sm text-destructive"
                            >
                                {{ errors.name }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <Label for="email">Email</Label>
                            <div class="relative">
                                <MailIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    placeholder="john@example.com"
                                    :class="{ 'border-destructive': errors.email }"
                                    class="pl-10"
                                    required
                                />
                            </div>
                            <p
                                v-if="errors.email"
                                class="text-sm text-destructive"
                            >
                                {{ errors.email }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <Label for="password">Password</Label>
                            <div class="relative">
                                <LockIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                    id="password"
                                    v-model="formData.password"
                                    type="password"
                                    placeholder="Create a password"
                                    :class="{ 'border-destructive': errors.password }"
                                    class="pl-10"
                                    required
                                />
                            </div>
                            <p
                                v-if="errors.password"
                                class="text-sm text-destructive"
                            >
                                {{ errors.password }}
                            </p>
                        </div>

                        <div class="space-y-2">
                            <Label for="confirm-password">Confirm Password</Label>
                            <div class="relative">
                                <LockIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                    id="confirm-password"
                                    v-model="formData.confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    :class="{ 'border-destructive': errors.confirmPassword }"
                                    class="pl-10"
                                    required
                                />
                            </div>
                            <p
                                v-if="errors.confirmPassword"
                                class="text-sm text-destructive"
                            >
                                {{ errors.confirmPassword }}
                            </p>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        class="w-full"
                        :disabled="isLoading"
                    >
                        <template v-if="isLoading">
                            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </template>
                        <template v-else>
                            Create Account
                        </template>
                    </Button>

                    <p class="text-center text-sm text-gray-500">
                        Already have an account?
                        <a
                            href="#"
                            class="text-blue-600 hover:underline"
                        >Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    UserIcon,
    MailIcon,
    LockIcon,
    GithubIcon,
    TwitterIcon,
    Loader2,
} from 'lucide-vue-next'

const name = ref('john Doe')
const email = ref('user@vue-blocks.dev')
const password = ref('123456789')
const confirmPassword = ref('123456789')

const formData = reactive({
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
})

const errors = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
})

const isLoading = ref(false)

const validateForm = () => {
    let isValid = true

    // Reset errors
    errors.name = ''
    errors.email = ''
    errors.password = ''
    errors.confirmPassword = ''

    // Name validation
    if (!formData.name) {
        errors.name = 'Name is required'
        isValid = false
    }

    // Email validation
    if (!formData.email) {
        errors.email = 'Email is required'
        isValid = false
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }

    // Password validation
    if (!formData.password) {
        errors.password = 'Password is required'
        isValid = false
    }
    else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long'
        isValid = false
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required'
        isValid = false
    }
    else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Passwords do not match'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    if (validateForm()) {
        try {
            isLoading.value = true
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            console.log({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
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

const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
}
</script>
