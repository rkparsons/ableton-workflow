export class SamplerFilterEnvAttack {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterEnvAttack'
        this.displayName = 'A /'
        this.path = 'parameters 86'
    }
}
