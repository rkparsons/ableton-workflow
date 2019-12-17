import unitType from '../../constants/unitType'

export class SamplerFilterCircuit {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Circuit'
        this.path = 'parameters 77'
        this.options = ['clean', 'osr', 'ms2', 'smp', 'prd']
        this.unitType = unitType.ENUM
    }
}
