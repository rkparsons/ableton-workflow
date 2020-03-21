declare class LiveAPI {
    property: string | undefined
    constructor(callback: LiveApiCallback | null, path: string)
    set(property: string, value: number): void
    call(methodName: string, args: string | string[] | number): string
}

// class Folder {
//     constructor(path: string)

//     typelist: string[]
// }
declare const post: (message: string) => void

declare type LiveApiCallback = (args: any[]) => void
