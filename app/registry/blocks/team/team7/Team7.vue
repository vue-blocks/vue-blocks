<template>
    <section class="py-32">
        <div class="container">
            <h2 class="text-4xl font-medium tracking-wide text-primary">
                Our investors
            </h2>
            <div class="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <div
                    v-for="investor in team"
                    :key="investor.name"
                    class=""
                >
                    <img
                        :alt="investor.name"
                        :src="investor.image"
                        class="size-32 rounded-full object-cover"
                    >
                    <h3 class="mt-3 font-semibold">
                        {{ investor.name }}
                    </h3>
                    <p class="text-muted-foreground">
                        {{ investor.company }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const team = [
    {
        name: 'Dennis Bouvard',
        company: 'Blackbird Ventures',
        image: 'https://mockmind-api.uifaces.co/content/human/104.jpg',
    },
    {
        name: 'Renatus Gerard',
        company: 'Center Studies',
        image: 'https://mockmind-api.uifaces.co/content/human/92.jpg',
    },
    {
        name: 'Leslie Alexander',
        company: 'TechNexus',
        image: 'https://mockmind-api.uifaces.co/content/human/221.jpg',
    },
    {
        name: 'Matthew Stephens',
        company: 'Etymol Cap',
        image: 'https://mockmind-api.uifaces.co/content/human/218.jpg',
    },
    {
        name: 'Josephine Newman',
        company: 'Vandenberg',
        image: 'https://mockmind-api.uifaces.co/content/human/217.jpg',
    },
]
</script>
