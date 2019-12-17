export class SamplerAmpDecay {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'AmpDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 62'
        this.defaultValue = 1
    }
}
