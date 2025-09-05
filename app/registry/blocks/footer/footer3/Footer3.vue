<template>
    <section class="py-32">
        <div class="container mx-auto">
            <footer>
                <div>
                    <img
                        src="https://raw.githubusercontent.com/vue-blocks/vue-blocks/refs/heads/master/public/vue-blocks.svg"
                        alt="footer"
                        class="w-full h-36 object-center"
                    >
                </div>
                <div class="flex flex-col items-center justify-between py-12 text-muted-foreground md:flex-row">
                    <div>&copy; vue-blocks.dev 2025</div>
                    <div>Time → {{ time }}</div>
                    <div>example@vue-blocks.dev</div>
                </div>
            </footer>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const time = ref('')

const updateLondonTime = () => {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
    time.value = new Intl.DateTimeFormat('en-GB', options).format(
        new Date(),
    )
}

let intervalId: number | undefined

onMounted(() => {
    updateLondonTime()
    intervalId = window.setInterval(updateLondonTime, 1000)
})

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
})
</script>
