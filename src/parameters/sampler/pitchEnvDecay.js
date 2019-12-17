export class SamplerPitchEnvDecay {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'D \\'
        this.path = 'parameters 42'
    }
}
