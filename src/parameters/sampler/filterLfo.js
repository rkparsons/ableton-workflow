export class SamplerFilterLfo {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterLfo'
        this.displayName = 'Filter'
        this.path = 'parameters 102'
        this.inputRange = [0, 24]
    }
}
