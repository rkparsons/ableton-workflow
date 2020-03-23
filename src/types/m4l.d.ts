declare class LiveAPI {
    id: string
    property: string | undefined
    constructor(callback: LiveApiCallback | null, path: string)
    set(property: string, ...args: (string | number)[]): void
    call(methodName: string, args: string | string[] | number): string
}

declare class Folder {
    constructor(path: string)
    filename: string
    typelist: string[]
    end: boolean
    next(): void
    close(): void
}

declare const post: (message: string) => void

declare type LiveApiCallback = (args: any[]) => void

declare const outlet: (index: number, args: string | string[] | number | number[]) => void
