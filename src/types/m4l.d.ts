declare class LiveAPI {
    constructor(callback: () => void, path: string)
}

declare class Folder {
    constructor(path: string)

    typelist: string[]
}

declare function post(input: string): void
