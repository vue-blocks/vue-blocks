<template>
    <section class="bg-accent py-32">
        <div class="container flex flex-col items-start text-left">
            <div class="mb-12 w-full md:mb-16">
                <h2 class="mb-8 w-full max-w-[24rem] text-3xl font-bold text-pretty sm:text-4xl md:max-w-[30rem] lg:max-w-[37rem] lg:text-5xl">
                    Platform Performance Insights
                </h2>
                <div class="flex flex-col justify-start gap-2 sm:flex-row">
                    <Button class="w-full sm:w-auto">
                        Get Started
                    </Button>
                    <Button
                        variant="outline"
                        class="w-full sm:w-auto"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
            <div class="grid w-full grid-cols-2 gap-12 sm:w-fit sm:grid-cols-4 lg:gap-16">
                <div class="w-full">
                    <div class="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
                        90%
                    </div>
                    <div class="text-base leading-6 text-muted-foreground lg:text-lg">
                        Metric 1
                    </div>
                </div>
                <div class="w-full">
                    <div class="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
                        200+
                    </div>
                    <div class="text-base leading-6 text-muted-foreground lg:text-lg">
                        Metric 2
                    </div>
                </div>
                <div class="w-full">
                    <div class="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
                        99%
                    </div>
                    <div class="text-base leading-6 text-muted-foreground lg:text-lg">
                        Metric 3
                    </div>
                </div>
                <div class="w-full">
                    <div class="mb-2 text-4xl font-semibold sm:text-4xl lg:text-5xl">
                        150+
                    </div>
                    <div class="text-base leading-6 text-muted-foreground lg:text-lg">
                        Metric 4
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
</script>
