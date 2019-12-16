import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerReverse extends SamplerParam {
    constructor() {
        super()
        this.name = 'Reverse'
        this.displayName = 'Playback'
        this.path = 'parameters 1'
        this.options = ['>>>', '<<<']
        this.unitType = unitType.ENUM
        this.randomRange = [0, 0]
    }
}
