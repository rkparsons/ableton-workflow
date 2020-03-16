declare module 'some-js-lib' {
    export class LiveAPI {
        constructor(callback: () => void, path: string)
    }

    export class Folder {
        constructor(path: string)

        typelist: string[]
    }

    export function post(input: string): void
}
