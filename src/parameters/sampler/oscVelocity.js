export class SamplerOscVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Osc'
        this.path = 'parameters 8'
    }
}
