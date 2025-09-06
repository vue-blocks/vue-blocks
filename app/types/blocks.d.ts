import type blocks from 'virtual-blocks'

export type BlockKey = Extract<keyof typeof blocks, string>

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
