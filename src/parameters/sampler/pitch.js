import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerPitch extends SamplerParam {
    constructor() {
        super()
        this.name = 'Pitch'
        this.displayName = 'Pitch'
        this.path = 'parameters 34'
        this.inputRange = [-48, 48]
        this.unitType = unitType.INT
    }
}
