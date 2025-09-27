<template>
    <section class="py-32">
        <div class="container">
            <div class="flex flex-col items-center gap-5">
                <img
                    src="https://www.vue-blocks.dev/logo.svg"
                    alt="logo"
                    class="size-10"
                >
                <h2 class="text-center text-3xl font-semibold">
                    Join our community
                    <br>
                    <span class="text-muted-foreground/80">
                        of designers & developers
                    </span>
                </h2>
                <div class="flex items-center gap-4">
                    <Button
                        size="lg"
                        variant="outline"
                        as-child
                    >
                        <a
                            href="https://x.com/vue-blocks"
                            target="_blank"
                            class="size-10"
                        >
                            <Icon icon="mdi:twitter" />
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        as-child
                    >
                        <a
                            href="https://github.com/vue-blocks"
                            target="_blank"
                            class="size-10"
                        >
                            <Icon icon="mdi:github" />
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        as-child
                    >
                        <a
                            href="https://vue-blocks.dev"
                            target="_blank"
                            class="size-10"
                        >
                            <Icon icon="ic:baseline-discord" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import { Button } from '@/components/ui/button'
</script>
