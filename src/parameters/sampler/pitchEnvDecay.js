export class SamplerPitchEnvDecay {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'PitchEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 42'
    }
}
