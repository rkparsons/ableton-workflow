export class SamplerFilterFreq {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterFreq'
        this.displayName = 'Freq'
        this.path = 'parameters 80'
        this.defaultValue = 1
    }
}
