<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button
                class="h-8"
                size="icon"
                variant="outline"
            >
                <Icon
                    mode="svg"
                    name="carbon:debug"
                />
            </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-lg max-w-4xl">
            <DialogHeader>
                <DialogTitle>Report an Issue</DialogTitle>
                <DialogDescription>
                    Describe the problem you're experiencing with this component.
                </DialogDescription>
            </DialogHeader>
            <p>TODO</p>
            <DialogFooter>
                <Button type="submit">
                    Submit Issue
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script lang="ts" setup>
import { Button } from '~/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog'

defineOptions({
    name: 'BlockCallbackIssues',
})
</script>
