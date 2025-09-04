<template>
    <div
        :class="cn('relative')"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
</script>
