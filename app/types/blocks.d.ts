import type { blocks } from '~/data/blocks'

export type BlockKey = keyof typeof blocks

export interface IBlockPaths {
    name: string
    target: string
    path: string
    raw: () => Promise<any>
}

export interface IBlock {
    name?: string
    className?: string
    files: IBlockPaths[]
    component: () => Promise<any>
    raw: () => Promise<any>
}

export interface IFileTree {
    name: string
    path?: string
    children?: IFileTree[]
}
