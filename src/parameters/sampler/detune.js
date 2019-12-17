import unitType from '../../constants/unitType'

export class SamplerDetune {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = '- / +'
        this.path = 'parameters 35'
        this.inputRange = [-50, 50]
        this.unitType = unitType.INT
    }
}
