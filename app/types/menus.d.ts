export interface IMenu {
    channel: string
    children: IMenuItem[]
}

export interface IMenuItem {
    name: string
    type: string
    title: string
    dependencies?: string[]
    registryDependencies?: string[]
    files: IMenuFiles[]
}

export interface IMenuFiles {
    path: string
    type: string
}
