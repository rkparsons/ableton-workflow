export class SamplerPitchEnvAttack {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'PitchEnvAttack'
        this.displayName = 'A /'
        this.path = 'parameters 39'
    }
}
