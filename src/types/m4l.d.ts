declare class LiveAPI {
    id: string
    property: string | undefined
    constructor(callback: LiveApiCallback | null, path: string)
    get(property: string): any
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

declare type LiveApiCallback = (args: any[]) => void

declare const post: (message: string) => void

declare const messnamed: (objectName: string, message: string) => void

declare const outlet: (index: number, args: string | string[] | number | number[]) => void
