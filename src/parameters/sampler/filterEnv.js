export class SamplerFilterEnv {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterEnv'
        this.displayName = 'Env'
        this.path = 'parameters 85'
        this.inputRange = [-72, 72]
    }
}
