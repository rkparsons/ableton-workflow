export class SamplerOscEnvDecay {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'OscEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 17'
        this.defaultValue = 1
    }
}
