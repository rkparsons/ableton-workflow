export class SamplerAmpTimeVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'AmpTimeVelocity'
        this.displayName = 'Time'
        this.path = 'parameters 71'
        this.inputRange = [-100, 100]
    }
}
