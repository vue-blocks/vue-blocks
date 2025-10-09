<template>
    <section class="py-32">
        <div class="container flex flex-col items-center gap-16">
            <h2 class="mx-auto mb-3 text-pretty text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-6 lg:max-w-3xl">
                Webinars
            </h2>
            <div class="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                <a
                    v-for="post in posts"
                    :key="post.id"
                    class="group order-last grid gap-y-6 sm:order-first sm:col-span-12 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:col-span-10 lg:col-start-2 lg:gap-x-12"
                    href="#"
                >
                    <div class="sm:col-span-5">
                        <div class="mb-4 md:mb-6">
                            <div class="flex text-xs uppercase tracking-wider text-zinc-600">
                                <span
                                    v-for="tag in post.tags"
                                    :key="tag"
                                    class="mr-3 md:mr-5 lg:mr-6"
                                >{{ tag }}</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold md:text-2xl lg:text-3xl">
                            {{ post.title }}
                        </h3>
                        <div class="mt-4 flex items-center space-x-2 md:mt-5">
                            <span class="font-semibold md:text-base">Read more</span>
                            <svg
                                class="lucide lucide-arrow-right ml-2 size-3 transition-transform group-hover:tranzinc-x-1"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    <div class="order-first sm:order-last sm:col-span-5">
                        <div class="aspect-[16/9] overflow-clip rounded-lg border border-border">
                            <img
                                :alt="post.title"
                                class="h-full w-full object-cover transition-transform group-hover:scale-[1.05]"
                                :src="post.image"
                            >
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const posts = [
    {
        id: 1,
        tags: ['Vue', 'Directives'],
        title: 'Understanding Vue.js Directives',
        description: 'Learn Vue.js directives with this guide. Understand their role, learn to create custom directives, and discover practical use cases and the best practices of using them in your projects.',
        image: 'https://api.certificates.dev/storage/9bdZwaFCgaLNMW2xcHcIkehIjzsahZKIJsh9XGYr.png',
    },
    {
        id: 2,
        tags: ['JavaScript'],
        title: 'Unravel the mystery of JavaScript\'s event bubbling and take control of your event handling',
        description: 'Ever clicked a button and had unexpected things happen to its parent elements? You might have just witnessed the magic (or mischief!) of JavaScript\'s event bubbling. It\'s a core concept that, once understood, will save you headaches and help you debug event-related issues.',
        image: 'https://api.certificates.dev/storage/7xT2XRBpmK080YY55jmGvkDjWUlNRbLcwxrdzpLc.png',
    },
]
</script>
