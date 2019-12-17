export class SamplerOscLevel {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Amount'
        this.path = 'parameters 7'
    }
}
