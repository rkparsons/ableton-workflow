import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerOscMulti extends SamplerParam {
    constructor() {
        super()
        this.name = 'OscMulti'
        this.displayName = 'Multi'
        this.path = 'parameters 13'
        this.options = ['x  0.001', 'x  0.01', 'x  0.1', 'x  1', 'x 10']
        this.unitType = unitType.ENUM
    }
}
