export class SamplerFilterDrive {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterDrive'
        this.displayName = 'Drive'
        this.path = 'parameters 83'
        this.inputRange = [0, 24]
    }
}
