export function useTocActiveItem(itemIds: Ref<string[]>) {
    const activeId = ref<string | null>(null)
    let observer: IntersectionObserver | null = null

    const updateObserver = () => {
        if (observer) {
            observer.disconnect()
        }

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries.reverse()) {
                    if (entry.isIntersecting) {
                        activeId.value = entry.target.id
                        break
                    }
                }
            },
            { rootMargin: `0% 0% -80% 0%` },
        )

        itemIds.value.forEach((id) => {
            const el = document.getElementById(id)
            if (el) {
                observer?.observe(el)
            }
        })
    }

    onMounted(() => {
        updateObserver()
    })

    watch(itemIds, () => {
        updateObserver()
    })

    onBeforeUnmount(() => {
        if (observer) {
            observer.disconnect()
            observer = null
        }
    })

    return { activeId }
}
