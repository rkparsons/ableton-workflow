export class SamplerPitchEnvAttack {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'A /'
        this.path = 'parameters 39'
    }
}
