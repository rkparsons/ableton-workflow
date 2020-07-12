export function chunk(array: any[], chunkSize: number) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize))
}

export function chunkString(array: string, chunkSize: number) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (v, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize))
}
