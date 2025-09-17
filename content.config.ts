import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        docs: defineCollection({
            type: 'page',
            source: {
                include: '**',
                exclude: ['index.md'],
            },
        }),
    },
})
