export class SamplerOscEnvAttack {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'OscEnvAttack'
        this.displayName = 'A /'
        this.path = 'parameters 14'
    }
}
