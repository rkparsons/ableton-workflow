import unitType from '../../constants/unitType'

export class SamplerSpread {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Spread'
        this.path = 'parameters 28'
        this.inputRange = [0, 100]
        this.unitType = unitType.INT
    }
}
