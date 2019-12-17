export class SamplerFilterFreq {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Freq'
        this.path = 'parameters 80'
        this.defaultValue = 1
    }
}
