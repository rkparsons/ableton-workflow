export class SamplerFilterVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterVelocity'
        this.displayName = 'Filter'
        this.path = 'parameters 101'
    }
}
