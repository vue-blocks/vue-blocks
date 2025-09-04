<template>
    <section class="py-32 bg-muted">
        <div class="container mx-auto">
            <div class="bg-white border border-white shadow-2xl shadow-muted-foreground rounded-2xl p-4 lg:p-14">
                <h2 class="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8">
                    Redefine, the power of construction.
                </h2>
                <p class="text-2xl leading-1 font-semibold text-muted-foreground">
                    Let creativity no longer be restricted. Faster setup speed, a more flexible component system, and a purer development experience.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-20">
                    <div class="flex flex-col">
                        <div class="mb-5">
                            <Icon
                                :size="32"
                                mode="svg"
                                name="lucide:cog"
                            />
                        </div>
                        <span class="mb-2 text-xl font-semibold">Ultra-fast construction, boundless creativity</span>
                        <p class="text-muted-foreground">
                            Each component has been meticulously refined to help you transform ideas into works at an extremely fast speed
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <div class="mb-5">
                            <Icon
                                :size="32"
                                mode="svg"
                                name="lucide:package-plus"
                            />
                        </div>
                        <span class="mb-2 text-xl font-semibold">Free assembly, flexibility first</span>
                        <p class="text-muted-foreground">
                            The modular design of Vue Blocks enables interface construction to be as free as building blocks, meeting various creative scenarios
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <div class="mb-5">
                            <Icon
                                :size="32"
                                mode="svg"
                                name="lucide:feather"
                            />
                        </div>
                        <span class="mb-2 text-xl font-semibold">The future begins here。</span>
                        <p class="text-muted-foreground">
                            Vue Blocks is not just a tool; it is your gateway to the next generation of development experiences
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'AppFeature',
})
</script>
