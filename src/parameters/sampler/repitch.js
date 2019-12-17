export class SamplerRepitch {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Repitch'
        this.path = 'parameters 34'
        this.pathDecimal = 'parameters 35'
        this.inputRange = [-7.5, 7.5]
        this.isRepitch = true
    }
}
