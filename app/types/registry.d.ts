export interface IMenu {
    channel: string
    children: IRegistryItem[]
}

export interface IRegistryItem {
    $schema?: string
    name: string
    type: string
    title: string
    dependencies?: string[]
    registryDependencies?: string[]
    files: IRegistryFile[]
    component?: string
    className?: string[]
}

export interface IRegistryFile {
    path: string
    type: string
}

export interface IRegistrySchema {
    $schema: string
    name: string
    homepage: string
    items: IRegistryItem[]
}
