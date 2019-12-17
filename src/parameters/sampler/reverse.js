import unitType from '../../constants/unitType'

export class SamplerReverse {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Playback'
        this.path = 'parameters 1'
        this.options = ['>>>', '<<<']
        this.unitType = unitType.ENUM
        this.randomRange = [0, 0]
    }
}
