export class SamplerFilterLfo {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Filter'
        this.path = 'parameters 102'
        this.inputRange = [0, 24]
    }
}
