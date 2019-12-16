import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerAmpLoop extends SamplerParam {
    constructor() {
        super()
        this.name = 'AmpLoop'
        this.displayName = 'Loop'
        this.path = 'parameters 68'
        this.options = ['none', 'loop', 'beat', 'sync', 'trig']
        this.unitType = unitType.ENUM
    }
}
