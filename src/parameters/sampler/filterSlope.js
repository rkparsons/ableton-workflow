import unitType from '../../constants/unitType'

export class SamplerFilterSlope {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'FilterSlope'
        this.displayName = 'Slope'
        this.path = 'parameters 79'
        this.options = ['12 dB', '24 dB']
        this.unitType = unitType.ENUM
    }
}
