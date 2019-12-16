import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerFilterSlope extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterSlope'
        this.displayName = 'Slope'
        this.path = 'parameters 79'
        this.options = ['12 dB', '24 dB']
        this.unitType = unitType.ENUM
    }
}
