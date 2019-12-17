export class SamplerAmpTimeVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Time'
        this.path = 'parameters 71'
        this.inputRange = [-100, 100]
    }
}
