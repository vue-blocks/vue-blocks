<template>
    <section class="py-32">
        <div class="container">
            <div class="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
                <h1 class="max-w-3xl text-pretty text-5xl font-semibold md:text-6xl">
                    {{ title }}
                </h1>
                <h3 class="text-muted-foreground max-w-3xl text-lg md:text-xl">
                    {{ description }}
                </h3>
                <div class="flex items-center gap-3 text-sm md:text-base">
                    <Avatar class="h-8 w-8 border">
                        <AvatarImage :src="authorImage" />
                        <AvatarFallback>{{ authorName.charAt(0) }}</AvatarFallback>
                    </Avatar>
                    <span>
                        <a
                            class="font-semibold"
                            href="#"
                        >
                            {{ authorName }}
                        </a>
                        <span class="ml-1">on {{ useDateFormat(pubDate, 'YYYY-MM-DD') }}</span>
                    </span>
                </div>
                <img
                    alt="placeholder"
                    class="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
                    :src="image"
                >
            </div>
        </div>
        <div class="container">
            <div class="prose dark:prose-invert mx-auto max-w-3xl">
                <h2 class="text-3xl font-extrabold">
                    The Great Joke Tax
                </h2>
                <p class="text-muted-foreground mt-2 text-lg">
                    In a kingdom far away, where laughter once flowed freely, a peculiar
                    tale unfolded about a king who decided to tax the very essence of
                    joy itself - jokes and jest.
                </p>

                <h2>How the Tax System Works</h2>
                <p>
                    The king, seeing how much happier his subjects were, realized the
                    error of his ways and repealed the joke tax. Jokester was declared a
                    hero, and the kingdom lived happily ever after.
                </p>
                <Alert>
                    <Lightbulb class="h-4 w-4" />
                    <AlertTitle>Royal Decree!</AlertTitle>
                    <AlertDescription>
                        Remember, all jokes must be registered at the Royal Jest Office
                        before telling them
                    </AlertDescription>
                </Alert>
                <h2>The People&apos;s Rebellion</h2>
                <p>
                    The people of the kingdom, feeling uplifted by the laughter, started
                    to tell jokes and puns again, and soon the entire kingdom was in on
                    the joke.
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
                    The king, seeing how much happier his subjects were, realized the
                    error of his ways and repealed the joke tax. Jokester was declared a
                    hero, and the kingdom lived happily ever after.
                </p>

                <h2>The King&apos;s Plan</h2>

                <img
                    alt="placeholder"
                    class="my-8 aspect-video w-full rounded-md object-cover"
                    src="https://github.com/vue-blocks/static/blob/main/placeholder-3.png?raw=true"
                >
                <p>
                    The king thought long and hard, and finally came up with{" "}
                    <a href="#">a brilliant plan</a>: he would tax the jokes in the
                    kingdom.
                </p>
                <blockquote>
                    &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
                    joke, so it&apos;s only fair that they should pay for the
                    privilege.&rdquo;
                </blockquote>
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
                    As a result, people stopped telling jokes, and the kingdom fell into
                    a gloom. But there was one person who refused to let the king&apos;s
                    foolishness get him down: a court jester named Jokester.
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Lightbulb } from 'lucide-vue-next'
import { useDateFormat } from '@vueuse/core'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const { title, authorName, image, pubDate, description, authorImage } = {
    title: 'Designing websites faster with shadcn',
    authorName: 'John Wang',
    image: 'https://github.com/vue-blocks/static/blob/main/open-graph-5.png?raw=true',
    pubDate: new Date(),
    description:
        'A step-by-step guide to building a modern, responsive blog using Vue and Tailwind CSS.',
    authorImage: 'https://mockmind-api.uifaces.co/content/human/213.jpg',
}
</script>
