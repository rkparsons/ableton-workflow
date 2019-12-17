export class SamplerFilterEnv {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Env'
        this.path = 'parameters 85'
        this.inputRange = [-72, 72]
    }
}
