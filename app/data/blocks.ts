export const blocks = {
    footer2: {
        files: [
            {
                name: 'Footer2',
                target: 'pages/index.vue',
                path: '@/registry/blocks/footer/footer2/Footer2.vue',
                raw: () => import('@/registry/blocks/footer/footer2/Footer2.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/footer/footer2/Footer2.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/footer/footer2/Footer2.vue?raw').then(m => m.default),
    },

    footer1: {
        files: [
            {
                name: 'Footer1',
                target: 'pages/index.vue',
                path: '@/registry/blocks/footer/footer1/Footer1.vue',
                raw: () => import('@/registry/blocks/footer/footer1/Footer1.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/footer/footer1/Footer1.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/footer/footer1/Footer1.vue?raw').then(m => m.default),
    },

    card2: {
        files: [
            {
                name: 'Card2',
                target: 'pages/index.vue',
                path: '@/registry/blocks/card/card2/Card2.vue',
                raw: () => import('@/registry/blocks/card/card2/Card2.vue?raw').then(m => m.default),
            },
        ],
        className: 'min-w-screen,min-h-screen,flex,justify-center,items-center',
        component: () => import('@/registry/blocks/card/card2/Card2.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/card/card2/Card2.vue?raw').then(m => m.default),
    },

    card1: {
        files: [
            {
                name: 'Card1',
                target: 'pages/index.vue',
                path: '@/registry/blocks/card/card1/Card1.vue',
                raw: () => import('@/registry/blocks/card/card1/Card1.vue?raw').then(m => m.default),
            },
        ],
        className: 'min-w-screen,min-h-screen,flex,justify-center,items-center',
        component: () => import('@/registry/blocks/card/card1/Card1.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/card/card1/Card1.vue?raw').then(m => m.default),
    },
}
