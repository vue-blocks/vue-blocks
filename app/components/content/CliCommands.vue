<template>
    <div class="relative not-first:mt-5 mb-5">
        <Tabs
            :default-value="type"
            class="rounded-lg bg-zinc-950 "
        >
            <TabsList
                class="dark h-auto w-full block justify-start rounded-none border-b bg-transparent px-4 py-0 space-x-3.5"
            >
                <TabsTrigger
                    v-for="pm in packageManager"
                    :key="pm"
                    :class="cn(
                        'relative rounded-none py-3 px-0 border-none',
                        'data-[state=active]:after:bg-zinc-200',
                        'data-[state=active]:bg-transparent',
                        'data-[state=active]:shadow-none',
                        'dark:data-[state=active]:bg-transparent',
                    )"
                    :value="pm"
                    class="after:absolute after:inset-x-0 after:bottom-0 after:h-0.5"
                >
                    {{ pm }}
                </TabsTrigger>
            </TabsList>
            <TabsContent
                v-for="pm in packageManager"
                :key="`content-${pm}`"
                :value="pm"
                class="relative"
            >
                <pre class="overflow-auto p-4 font-mono text-sm text-muted">{{ commands[pm] }}</pre>
                <div class="absolute top-2 right-2 [&_button]:text-muted-foreground">
                    <CopyCodeButton :code="commands[pm]" />
                </div>
            </TabsContent>
        </Tabs>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

const props = defineProps<{
    type: PackageManager
    name: string
}>()

const commands = {
    pnpm: `pnpm dlx shadcn-vue@latest add https://vue-blocks.dev/r/${props.name}.json`,
    npm: `npx shadcn-vue@latest add https://vue-blocks.dev/r/${props.name}.json`,
    yarn: `npx shadcn-vue@latest add https://vue-blocks.dev/r/${props.name}.json`,
    bun: `bunx --bun shadcn-vue@latest add https://vue-blocks.dev/r/${props.name}.json`,
}

const packageManager = Object.keys(commands) as PackageManager[]
</script>
