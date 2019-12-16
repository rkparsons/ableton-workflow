import { SamplerParam } from './sampler'

export class SamplerPitchLfo extends SamplerParam {
    constructor() {
        super()
        this.name = 'PitchLfo'
        this.displayName = 'Pitch'
        this.path = 'parameters 36'
    }
}
