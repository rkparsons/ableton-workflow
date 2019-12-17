import unitType from '../../constants/unitType'

export class SamplerShaperType {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Shaper'
        this.path = 'parameters 104'
        this.options = ['soft', 'hard', 'sine', '4bit']
        this.unitType = unitType.ENUM
    }
}
