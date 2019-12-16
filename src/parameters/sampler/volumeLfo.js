import { SamplerParam } from './sampler'

export class SamplerVolumeLfo extends SamplerParam {
    constructor() {
        super()
        this.name = 'VolumeLfo'
        this.displayName = 'Vol'
        this.path = 'parameters 55'
    }
}
