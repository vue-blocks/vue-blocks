<template>
    <div class="flex flex-wrap -space-x-2 overflow-hidden">
        <!-- TODO -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://randomuser.me/api/portraits/women/79.jpg" -->
        <!--        > -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" -->
        <!--        > -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" -->
        <!--        > -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://randomuser.me/api/portraits/men/86.jpg" -->
        <!--        > -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" -->
        <!--        > -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" -->
        <!--        > -->
        <!--        <img -->
        <!--            class="size-8 rounded-full border-2 border-white" -->
        <!--            src="https://randomuser.me/api/portraits/men/18.jpg" -->
        <!--        > -->
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'BlockContributors',
})

interface IProps {
    module: string
}

const props = withDefaults(defineProps<IProps>(), {})
</script>
