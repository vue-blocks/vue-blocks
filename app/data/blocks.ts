export const blocks = {
    feature1: {
        files: [
            {
                name: 'Feature1',
                target: 'pages/index.vue',
                path: '@/registry/blocks/feature/feature1/Feature1.vue',
                raw: () => import('@/registry/blocks/feature/feature1/Feature1.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/feature/feature1/Feature1.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/feature/feature1/Feature1.vue?raw').then(m => m.default),
    },

    feature4: {
        files: [
            {
                name: 'Feature4',
                target: 'pages/index.vue',
                path: '@/registry/blocks/feature/feature4/Feature4.vue',
                raw: () => import('@/registry/blocks/feature/feature4/Feature4.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/feature/feature4/Feature4.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/feature/feature4/Feature4.vue?raw').then(m => m.default),
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

    feature3: {
        files: [
            {
                name: 'Feature3',
                target: 'pages/index.vue',
                path: '@/registry/blocks/feature/feature3/Feature3.vue',
                raw: () => import('@/registry/blocks/feature/feature3/Feature3.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/feature/feature3/Feature3.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/feature/feature3/Feature3.vue?raw').then(m => m.default),
    },

    feature2: {
        files: [
            {
                name: 'Feature2',
                target: 'pages/index.vue',
                path: '@/registry/blocks/feature/feature2/Feature2.vue',
                raw: () => import('@/registry/blocks/feature/feature2/Feature2.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/feature/feature2/Feature2.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/feature/feature2/Feature2.vue?raw').then(m => m.default),
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

    cta1: {
        files: [
            {
                name: 'Cta1',
                target: 'pages/index.vue',
                path: '@/registry/blocks/cta/cta1/Cta1.vue',
                raw: () => import('@/registry/blocks/cta/cta1/Cta1.vue?raw').then(m => m.default),
            },
        ],
        className: '',
        component: () => import('@/registry/blocks/cta/cta1/Cta1.vue').then(m => m.default),
        raw: () => import('@/registry/blocks/cta/cta1/Cta1.vue?raw').then(m => m.default),
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
}
