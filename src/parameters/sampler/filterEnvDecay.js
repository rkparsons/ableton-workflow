export class SamplerFilterEnvDecay {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'D \\'
        this.path = 'parameters 89'
        this.defaultValue = 1
    }
}
