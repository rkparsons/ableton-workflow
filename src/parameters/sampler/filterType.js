import unitType from '../../constants/unitType'

export class SamplerFilterType {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Type'
        this.path = 'parameters 76'
        this.options = ['low -\\', 'high /-', 'band /\\', 'notch \\/']
        this.unitType = unitType.ENUM
    }
}
