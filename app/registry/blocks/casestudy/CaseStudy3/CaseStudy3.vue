<template>
    <section class="py-32">
        <div class="container">
            <div
                class="mx-auto flex max-w-prose flex-col items-center justify-between gap-10 lg:max-w-none lg:flex-row"
            >
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>/</BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Components</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 class="mt-10 text-balance text-5xl font-semibold lg:text-7xl">
                        How this tool helps teams achieve efficient workflows
                    </h1>
                    <div class="mt-16">
                        <p class="font-medium">
                            Featuring insights from:
                        </p>
                        <div class="mt-4 flex items-center gap-4">
                            <Avatar class="size-16 rounded-xl border">
                                <AvatarImage
                                    alt="avatar"
                                    src="https://mockmind-api.uifaces.co/content/human/211.jpg"
                                />
                            </Avatar>
                            <div class="flex flex-col">
                                <p class="font-semibold">
                                    Jane Doe
                                </p>
                                <p class="text-muted-foreground">
                                    Senior Product Manager
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    alt="placeholder"
                    class="max-h-[524px] w-full rounded-xl object-cover lg:w-auto"
                    src="https://github.com/vue-blocks/static/blob/main/cover-8.png?raw=true"
                >
            </div>
            <div class="relative mt-20 flex flex-col gap-x-6 gap-y-16 lg:flex-row">
                <aside class="mx-auto h-fit max-w-prose lg:sticky lg:top-10 lg:mx-0 lg:w-64 lg:max-w-none">
                    <img
                        alt="logo"
                        class="h-6 dark:invert"
                        src="https://raw.githubusercontent.com/vue-blocks/vue-blocks/refs/heads/master/public/vue-blocks.svg"
                    >
                    <div class="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-1">
                        <div class="col-span-2 lg:col-span-1">
                            <h2 class="font-semibold">
                                Overview
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                A modern platform designed to simplify workflows, automate
                                processes, and drive innovation at scale. It is the central
                                foundation for product and customer data, on top of which high
                                impact workflows are built.
                            </p>
                        </div>
                        <div>
                            <h2 class="font-semibold">
                                Sector
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                Technology; Automation
                            </p>
                        </div>
                        <div>
                            <h2 class="font-semibold">
                                Team size
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                10-100
                            </p>
                        </div>
                        <div>
                            <h2 class="font-semibold">
                                Location
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                San Francisco, California
                            </p>
                        </div>
                        <div>
                            <h2 class="font-semibold">
                                Established
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                2020
                            </p>
                        </div>
                        <div>
                            <h2 class="font-semibold">
                                Funding
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                $25m (Series A)
                            </p>
                        </div>
                        <div>
                            <h2 class="font-semibold">
                                Core features
                            </h2>
                            <p class="text-muted-foreground mt-1 text-sm">
                                Dashboards Tools API integration
                            </p>
                        </div>
                    </div>
                    <div class="mt-10 flex flex-col">
                        <span class="text-muted-foreground mb-2 text-sm">
                            Share this content:
                        </span>
                        <div class="flex gap-4">
                            <a
                                class="text-muted-foreground hover:text-primary"
                                href="#"
                            >
                                <Icon
                                    icon="mdi:linkedin"
                                    class="size-5"
                                />
                            </a>
                            <a
                                class="text-muted-foreground hover:text-primary"
                                href="#"
                            >
                                <Icon
                                    icon="mdi:twitter"
                                    class="size-5"
                                />
                            </a>
                            <a
                                class="text-muted-foreground hover:text-primary"
                                href="#"
                            >
                                <Icon
                                    icon="ic:baseline-facebook"
                                    class="size-5"
                                />
                            </a>
                        </div>
                    </div>
                </aside>
                <div class="flex">
                    <div class="mx-auto max-w-prose lg:max-w-4xl lg:px-20">
                        <div
                            class="grid gap-x-10 gap-y-7 rounded-3xl border p-6 lg:grid-cols-2 lg:gap-y-10 lg:border-none lg:p-0"
                        >
                            <div>
                                <h2 class="text-xl font-semibold">
                                    Problem
                                </h2>
                                <p class="text-muted-foreground mt-3">
                                    The team faced difficulties aligning their growth strategy
                                    with a rigid data model, causing inefficiencies and limited
                                    access to essential customer insights.
                                </p>
                            </div>
                            <Separator class="w-full lg:hidden" />
                            <div>
                                <h2 class="text-xl font-semibold">
                                    Approach
                                </h2>
                                <p class="text-muted-foreground mt-3">
                                    Adopted a flexible platform as the central hub for data,
                                    enabling the creation of impactful workflows to drive
                                    growth.
                                </p>
                            </div>
                            <div class="border-t pt-10 lg:col-span-2">
                                <h2 class="text-xl font-semibold">
                                    Outcomes
                                </h2>
                                <ul class="mt-3 grid gap-x-10 gap-y-3 lg:grid-cols-2">
                                    <li class="flex gap-3">
                                        <CheckCircle2 class="mt-0.5 size-5 shrink-0" />
                                        <p class="font-semibold">
                                            A streamlined system that accelerates their growth
                                            initiatives
                                        </p>
                                    </li>
                                    <li class="flex gap-3">
                                        <CheckCircle2 class="mt-0.5 size-5 shrink-0" />
                                        <p class="font-semibold">
                                            A customizable CRM that mirrors their data and
                                            integrates seamlessly with their tools
                                        </p>
                                    </li>
                                    <li class="flex gap-3">
                                        <CheckCircle2 class="mt-0.5 size-5 shrink-0" />
                                        <p class="font-semibold">
                                            A scalable, collaborative solution that grows alongside
                                            their business
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-20">
                            <section
                                id="section1"
                                :ref="addSectionRef('section1')"
                                class="prose dark:prose-invert mb-8"
                            >
                                <h2>The King&apos;s Plan</h2>
                                <p>
                                    The king thought long and hard, and finally came up with{{ " " }}
                                    <a href="#">a brilliant plan</a>: he would tax the jokes in
                                    the kingdom.
                                </p>
                                <blockquote>
                                    &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a
                                    good joke, so it&apos;s only fair that they should pay for
                                    the privilege.&rdquo;
                                </blockquote>
                            </section>
                            <section
                                id="section2"
                                :ref="addSectionRef('section2')"
                                class="prose dark:prose-invert mb-8"
                            >
                                <h2>The Joke Tax</h2>
                                <p>
                                    The king&apos;s subjects were not amused. They grumbled and
                                    complained, but the king was firm:
                                </p>
                                <ul>
                                    <li>1st level of puns: 5 gold coins</li>
                                    <li>2nd level of jokes: 10 gold coins</li>
                                    <li>3rd level of one-liners : 20 gold coins</li>
                                </ul>
                                <p>
                                    As a result, people stopped telling jokes, and the kingdom
                                    fell into a gloom. But there was one person who refused to
                                    let the king&apos;s foolishness get him down: a court jester
                                    named Jokester.
                                </p>
                            </section>
                            <section
                                id="section3"
                                :ref="addSectionRef('section3')"
                                class="prose dark:prose-invert mb-8"
                            >
                                <h2>Jokester's Revolt</h2>
                                <p class="not-first:mt-6 leading-7">
                                    Jokester began sneaking into the castle in the middle of the
                                    night and leaving jokes all over the place: under the king's
                                    pillow, in his soup, even in the royal toilet. The king was
                                    furious, but he couldn't seem to stop Jokester.
                                </p>
                                <p class="not-first:mt-6 leading-7">
                                    And then, one day, the people of the kingdom discovered that
                                    the jokes left by Jokester were so funny that they couldn't
                                    help but laugh. And once they started laughing, they
                                    couldn't stop.
                                </p>
                            </section>

                            <section
                                id="section4"
                                :ref="addSectionRef('section4')"
                                class="prose dark:prose-invert mb-8"
                            >
                                <h2>The People&apos;s Rebellion</h2>
                                <p>
                                    The people of the kingdom, feeling uplifted by the laughter,
                                    started to tell jokes and puns again, and soon the entire
                                    kingdom was in on the joke.
                                </p>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>King&apos;s Treasury</th>
                                                <th>People&apos;s happiness</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Empty</td>
                                                <td>Overflowing</td>
                                            </tr>
                                            <tr class="even:bg-muted m-0 border-t p-0">
                                                <td>Modest</td>
                                                <td>Satisfied</td>
                                            </tr>
                                            <tr class="even:bg-muted m-0 border-t p-0">
                                                <td>Full</td>
                                                <td>Ecstatic</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    The king, seeing how much happier his subjects were,
                                    realized the error of his ways and repealed the joke tax.
                                    Jokester was declared a hero, and the kingdom lived happily
                                    ever after.
                                </p>
                                <Alert>
                                    <Lightbulb class="h-4 w-4" />
                                    <AlertTitle>Royal Decree!</AlertTitle>
                                    <AlertDescription>
                                        Remember, all jokes must be registered at the Royal Jest
                                        Office before telling them
                                    </AlertDescription>
                                </Alert>
                            </section>
                        </div>
                    </div>
                    <div class="sticky top-8 hidden h-fit shrink-0 lg:block">
                        <span class="flex items-center gap-2 text-sm">
                            <AlignLeft class="h-4 w-4" />
                            On this page
                        </span>
                        <nav class="mt-2 text-sm">
                            <ul>
                                <li>
                                    <a
                                        :class="cn(
                                            'block py-1 transition-colors duration-200',
                                            activeSection === 'section1'
                                                ? 'text-primary font-medium'
                                                : 'text-muted-foreground hover:text-primary',
                                        )"
                                        href="#section1"
                                    >
                                        The King's Plan
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="cn(
                                            'block py-1 transition-colors duration-200',
                                            activeSection === 'section2'
                                                ? 'text-primary font-medium'
                                                : 'text-muted-foreground hover:text-primary',
                                        )"
                                        href="#section2"
                                    >
                                        The Joke Tax
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="cn(
                                            'block py-1 transition-colors duration-200',
                                            activeSection === 'section3'
                                                ? 'text-primary font-medium'
                                                : 'text-muted-foreground hover:text-primary',
                                        )"
                                        href="#section3"
                                    >
                                        Jokester's Revolt
                                    </a>
                                </li>
                                <li>
                                    <a
                                        :class="cn(
                                            'block py-1 transition-colors duration-200',
                                            activeSection === 'section4'
                                                ? 'text-primary font-medium'
                                                : 'text-muted-foreground hover:text-primary',
                                        )"
                                        href="#section4"
                                    >
                                        The People's Rebellion
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, type VNodeRef } from 'vue'

import { AlignLeft, CheckCircle2, Lightbulb } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

import { cn } from '@/lib/utils'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'

const activeSection = ref<string | null>(null)
const sectionRefs = ref<Record<string, HTMLElement | null>>({})

let observer: IntersectionObserver | null = null

onMounted(() => {
    const sections = Object.keys(sectionRefs.value)

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id
            }
        })
    }

    observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    })

    sections.forEach((sectionId) => {
        const element = sectionRefs.value[sectionId]
        if (element) {
            observer?.observe(element)
        }
    })
})

onUnmounted(() => {
    observer?.disconnect()
    observer = null
})

const addSectionRef = (id: string) => {
    return ((el: Element | null) => {
        sectionRefs.value[id] = el as HTMLElement | null
    }) as VNodeRef
}
</script>
