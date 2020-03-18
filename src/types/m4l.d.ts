declare class LiveAPI {
    property: string | undefined
    constructor(path: string)
    constructor(callback: LiveApiCallback, path: string)
    set(property: string, value: number): void
    call(methodName: string, args: string | string[]): void
}

// class Folder {
//     constructor(path: string)

//     typelist: string[]
// }
declare const post: (message: string) => void

declare type LiveApiCallback = (args: any[]) => void
