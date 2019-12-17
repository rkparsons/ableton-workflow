export class SamplerOscVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'OscVelocity'
        this.displayName = 'Osc'
        this.path = 'parameters 8'
    }
}
