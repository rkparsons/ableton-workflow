import unitType from '../../constants/unitType'

export class SamplerPitch {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Pitch'
        this.displayName = 'Pitch'
        this.path = 'parameters 34'
        this.inputRange = [-48, 48]
        this.unitType = unitType.INT
    }
}
