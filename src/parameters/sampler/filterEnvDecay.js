import { SamplerParam } from './sampler'

export class SamplerFilterEnvDecay extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 89'
        this.defaultValue = 1
    }
}
