import { SamplerParam } from './sampler'

export class SamplerFilterFreq extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterFreq'
        this.displayName = 'Freq'
        this.path = 'parameters 80'
        this.defaultValue = 1
    }
}
