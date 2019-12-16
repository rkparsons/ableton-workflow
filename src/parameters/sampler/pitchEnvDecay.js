import { SamplerParam } from './sampler'

export class SamplerPitchEnvDecay extends SamplerParam {
    constructor() {
        super()
        this.name = 'PitchEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 42'
    }
}
