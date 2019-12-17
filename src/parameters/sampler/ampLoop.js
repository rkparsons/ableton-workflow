import unitType from '../../constants/unitType'

export class SamplerAmpLoop {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Loop'
        this.path = 'parameters 68'
        this.options = ['none', 'loop', 'beat', 'sync', 'trig']
        this.unitType = unitType.ENUM
    }
}
