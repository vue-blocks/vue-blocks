<template>
    <section class="relative w-full flex items-center bg-white py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="max-w-md mx-auto">
                <Button
                    v-if="submitted"
                    variant="ghost"
                    class="mb-6"
                    @click="handleBack"
                >
                    <ArrowLeftIcon class="mr-2 h-4 w-4" />
                    Back to reset password
                </Button>

                <div
                    v-if="!submitted"
                    class="space-y-8"
                >
                    <div class="space-y-2">
                        <h1 class="text-3xl font-bold">
                            Reset password
                        </h1>
                        <p class="text-gray-500">
                            Enter your email address and we'll send you instructions to reset your password.
                        </p>
                    </div>

                    <Alert
                        v-if="error"
                        variant="destructive"
                    >
                        <AlertCircleIcon class="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{{ error }}</AlertDescription>
                    </Alert>

                    <Alert
                        v-if="errors.email"
                        variant="destructive"
                    >
                        <AlertCircleIcon class="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{{ errors.email }}</AlertDescription>
                    </Alert>

                    <form
                        class="space-y-6"
                        @submit.prevent="handleSubmit"
                    >
                        <div class="space-y-2">
                            <Label for="email">Email address</Label>
                            <div class="relative">
                                <MailIcon class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    placeholder="Enter your email"
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
                                Send reset instructions
                            </template>
                        </Button>
                    </form>

                    <p class="text-center text-sm text-gray-500">
                        Remember your password?
                        <a
                            href="#"
                            class="text-blue-600 hover:underline"
                        >Sign in</a>
                    </p>
                </div>

                <div
                    v-else
                    class="space-y-6"
                >
                    <Alert>
                        <CheckCircleIcon class="h-4 w-4" />
                        <AlertTitle>Check your email</AlertTitle>
                        <AlertDescription>
                            We've sent password reset instructions to {{ email }}. Please check your inbox and follow the instructions
                            to
                            reset your password.
                        </AlertDescription>
                    </Alert>

                    <div class="space-y-4">
                        <p class="text-sm text-gray-500">
                            Didn't receive the email? Check your spam folder or
                            <button
                                class="text-blue-600 hover:underline"
                                @click="handleBack"
                            >
                                try another email address
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MailIcon, AlertCircleIcon, CheckCircleIcon, ArrowLeftIcon, Loader2 } from 'lucide-vue-next'

const email = ref('user@vue-blocks.dev')
const submitted = ref(false)
const error = ref('')

const formData = reactive({
    email: email.value,
})

const errors = reactive({
    email: '',
})

const isLoading = ref(false)

const validateForm = () => {
    let isValid = true

    // Reset errors
    errors.email = ''

    // Email validation
    if (!formData.email) {
        errors.email = 'Email is required'
        isValid = false
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    if (validateForm()) {
        try {
            isLoading.value = true
            // Simple email validation
            if (!email.value.includes('@')) {
                error.value = 'Please enter a valid email address'
                isLoading.value = false
                return
            }

            // Handle password reset logic here
            console.log({ email: email.value })
            submitted.value = true
        }
        catch (error) {
            console.error('Login error:', error)
        }
        finally {
            isLoading.value = false
        }
    }
}

const handleBack = () => {
    submitted.value = false
    email.value = ''
    error.value = ''
}
</script>
