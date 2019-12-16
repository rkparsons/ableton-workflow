import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerShaperType extends SamplerParam {
    constructor() {
        super()
        this.name = 'ShaperType'
        this.displayName = 'Shaper'
        this.path = 'parameters 104'
        this.options = ['soft', 'hard', 'sine', '4bit']
        this.unitType = unitType.ENUM
    }
}
