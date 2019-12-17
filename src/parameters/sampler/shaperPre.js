import unitType from '../../constants/unitType'

export class SamplerShaperPre {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Route'
        this.path = 'parameters 106'
        this.options = ['<<<', '>>>']
        this.unitType = unitType.ENUM
    }
}
