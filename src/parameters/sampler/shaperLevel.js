import unitType from '../../constants/unitType'

export class SamplerShaperLevel {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = '- / +'
        this.path = 'parameters 105'
        this.inputRange = [0, 100]
        this.unitType = unitType.INT
    }
}
