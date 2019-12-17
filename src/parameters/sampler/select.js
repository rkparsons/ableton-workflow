import unitType from '../../constants/unitType'

export class SamplerSelect {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Sample'
        this.path = 'parameters 3'
        this.options = []
        this.unitType = unitType.ENUM
        this.isSample = true
    }
}
