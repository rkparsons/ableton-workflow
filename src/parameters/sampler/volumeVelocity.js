import { SamplerParam } from './sampler'

export class SamplerVolumeVelocity extends SamplerParam {
    constructor() {
        super()
        this.name = 'VolumeVelocity'
        this.displayName = 'Vol'
        this.path = 'parameters 54'
    }
}
