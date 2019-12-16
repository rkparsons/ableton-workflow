import { SamplerParam } from './sampler'

export class SamplerAmpDecay extends SamplerParam {
    constructor() {
        super()
        this.name = 'AmpDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 62'
        this.defaultValue = 1
    }
}
