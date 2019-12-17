import unitType from '../../constants/unitType'

export class SamplerCategory {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Category'
        this.path = 'parameters 29'
        this.options = []
        this.unitType = unitType.ENUM
        this.isCategory = true
    }
}
