<template>
    <div class="flex flex-wrap -space-x-2 overflow-hidden">
        <AppTooltip
            v-for="member in contributors[module] as IContributorInfo[]"
            :key="member.name"
            :content="member.name"
            side="top"
        >
            <img
                :alt="member.name"
                :src="`https://github.com/${member.name}.png?raw`"
                class="size-8 rounded-full border-2 border-white"
            >
        </AppTooltip>
    </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import contributors from 'virtual-contributors'
import type { IContributorInfo } from '~/types/contributor'

defineOptions({
    name: 'BlockContributors',
})

interface IProps {
    module: string
}

withDefaults(defineProps<IProps>(), {})
</script>
