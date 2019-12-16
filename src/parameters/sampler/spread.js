import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerSpread extends SamplerParam {
    constructor() {
        super()
        this.name = 'Spread'
        this.displayName = 'Spread'
        this.path = 'parameters 28'
        this.inputRange = [0, 100]
        this.unitType = unitType.INT
    }
}
