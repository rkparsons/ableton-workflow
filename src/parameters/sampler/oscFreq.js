export class SamplerOscFreq {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'OscFreq'
        this.displayName = 'Freq'
        this.path = 'parameters 12'
    }
}
