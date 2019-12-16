import { SamplerParam } from './sampler'

export class SamplerOscFreq extends SamplerParam {
    constructor() {
        super()
        this.name = 'OscFreq'
        this.displayName = 'Freq'
        this.path = 'parameters 12'
    }
}
