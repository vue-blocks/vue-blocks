<template>
    <section class="relative py-20">
        <div
            :class="cn(
                'flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10',
                'container',
                `md:[--aside-width:220px] lg:[--aside-width:240px]`,
                'grid-cols-[var(--aside-width)_minmax(0,1fr)]',
            )"
        >
            <aside
                :class="cn(
                    'h-[calc(100vh-3.5rem)] md:top-20',
                )"
                class="fixed z-30 -ml-2 hidden w-full shrink-0 overflow-y-auto top-20 md:sticky md:block"
            >
                <DocsAside :pathname="path" />
            </aside>
            <main class="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_250px]">
                <div class="mx-auto w-full min-w-0 max-w-3xl">
                    <ContentTitle
                        :description="page?.description"
                        :title="page?.title"
                    />
                    <div class="pb-12 pt-8">
                        <ContentRenderer
                            v-if="page"
                            :value="page"
                        />
                    </div>
                    <DocsPagination />
                </div>
                <DocsToc :toc="page?.body.toc" />
            </main>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import ContentTitle from '~/components/content/Title.vue'

const route = useRoute()
const path = computed(() => route.path)

const { data: page } = await useAsyncData(path.value, () => {
    return queryCollection('docs').path(path.value).first()
})

if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)
</script>
