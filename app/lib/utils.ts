import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function capitalize(content: string): string {
    if (!content) return ''
    return content.charAt(0).toUpperCase() + content.slice(1)
}
