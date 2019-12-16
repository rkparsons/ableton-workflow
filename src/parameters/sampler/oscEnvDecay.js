import { SamplerParam } from './sampler'

export class SamplerOscEnvDecay extends SamplerParam {
    constructor() {
        super()
        this.name = 'OscEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 17'
        this.defaultValue = 1
    }
}
