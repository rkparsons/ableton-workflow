export class SamplerOscLevel {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'OscLevel'
        this.displayName = 'Amount'
        this.path = 'parameters 7'
    }
}
