<template>
    <section class="relative w-full flex items-center bg-background py-8 md:py-16 lg:py-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="max-w-md mx-auto space-y-8">
                <div class="flex flex-col items-center space-y-2 text-center">
                    <div class="p-3 rounded-full bg-primary/10">
                        <ShieldCheckIcon class="h-12 w-12 text-primary" />
                    </div>
                    <h1 class="text-3xl font-bold">
                        Two-step verification
                    </h1>
                    <p class="text-muted-foreground">
                        Enter the 6-digit code sent to your email address.
                    </p>
                </div>

                <form
                    class="space-y-6"
                    @submit.prevent
                >
                    <div class="space-y-4 flex justify-center">
                        <PinInput
                            id="pin-input"
                            v-model="code"
                            placeholder="○"
                            @complete="handleComplete"
                        >
                            <PinInputGroup>
                                <PinInputSlot
                                    v-for="index in 6"
                                    :key="index"
                                    :index="index - 1"
                                    class="w-12 h-12 text-xl font-medium uppercase"
                                />
                            </PinInputGroup>
                        </PinInput>
                    </div>

                    <Alert
                        v-if="error"
                        variant="destructive"
                    >
                        <AlertDescription>{{ error }}</AlertDescription>
                    </Alert>

                    <Button
                        :disabled="isLoading || code.length !== 6"
                        class="w-full"
                        type="submit"
                    >
                        <template v-if="isLoading">
                            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </template>
                        <template v-else>
                            Verify code
                        </template>
                    </Button>
                </form>

                <div class="space-y-4">
                    <p class="text-center text-sm text-muted-foreground">
                        <span
                            v-if="timeLeft > 0"
                            class="flex items-center justify-center gap-1"
                        >
                            <ClockIcon class="h-4 w-4" />
                            Resend code in {{ timeLeft }}s
                        </span>
                        <button
                            v-else
                            class="text-primary hover:text-primary/80"
                            @click="handleResend"
                        >
                            Resend code
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ClockIcon, Loader2, ShieldCheckIcon } from 'lucide-vue-next'
import { PinInput, PinInputGroup, PinInputSlot } from '@/components/ui/pin-input'

const code = ref<string[]>([])
const error = ref('')
const timeLeft = ref(30)
const isLoading = ref(false)

const handleComplete = async (value: string[]) => {
    if (value.length === 6) {
        try {
            isLoading.value = true
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            console.log('Code submitted:', value.join(''))
        }
        catch (error) {
            console.error('Verification error:', error)
        }
        finally {
            isLoading.value = false
        }
    }
}

const handleResend = () => {
    timeLeft.value = 30
    const timer = setInterval(() => {
        timeLeft.value--
        if (timeLeft.value === 0) {
            clearInterval(timer)
        }
    }, 1000)
}
</script>
