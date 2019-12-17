export class SamplerFilterVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Filter'
        this.path = 'parameters 101'
    }
}
