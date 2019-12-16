import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerFilterCircuit extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterCircuit'
        this.displayName = 'Circuit'
        this.path = 'parameters 77'
        this.options = ['clean', 'osr', 'ms2', 'smp', 'prd']
        this.unitType = unitType.ENUM
    }
}
