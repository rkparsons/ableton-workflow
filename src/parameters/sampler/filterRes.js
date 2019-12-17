export class SamplerFilterRes {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterRes'
        this.displayName = 'Res'
        this.path = 'parameters 81'
        this.inputRange = [0, 1.25]
    }
}
