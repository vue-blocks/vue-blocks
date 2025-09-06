import tailwindcss from '@tailwindcss/vite'
import { virtualBlocks } from './plugins/virtual-blocks'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        'shadcn-nuxt',
        '@vueuse/nuxt',
        'nuxt-shiki',
    ],

    ssr: false,
    devtools: { enabled: true },

    app: {
        head: {
            title: 'Vue Blocks · shadcn/vue blocks · Vue Components',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            title: 'VueBlocks',
            description: 'The ultimate front-end building block library specifically designed for Vue',
            alias: 'vue-blocks',
            github: 'https://github.com/vue-blocks/vue-blocks',
            website: 'https://vue-blocks.dev',
            url: 'vue-blocks.dev',
        },
    },

    appDir: './',

    compatibilityDate: '2025-08-29',
    vite: {
        plugins: [
            tailwindcss(),
            virtualBlocks(),
        ],
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },
})
