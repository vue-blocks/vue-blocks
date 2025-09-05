<template>
    <section class="py-32">
        <div class="container mx-auto">
            <div
                class="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12"
            >
                <div class="flex-1">
                    <h3 class="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                        {{ heading }}
                    </h3>
                    <p class="text-muted-foreground max-w-xl lg:text-lg">
                        {{ description }}
                    </p>
                </div>
                <div class="shrink-0">
                    <div class="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
                        <div class="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
                            <img
                                :alt="imageAlt"
                                class="object-cover"
                                :src="imageSrc"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const heading = 'Call to Action'
const description = 'Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.'
const imageSrc = 'https://plus.unsplash.com/premium_photo-1669075651524-bf31ee878d1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZ1ZWJsb2NrfGVufDB8fDB8fHww'
const imageAlt = 'Call to action image'
</script>
