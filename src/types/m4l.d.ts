declare class LiveAPI {
    call(methodName: string, args: string | string[]): void
    constructor(path: string)
    constructor(callback: () => void, path: string)
}

// class Folder {
//     constructor(path: string)

//     typelist: string[]
// }
declare const post: (message: string) => void
