import { SamplerParam } from './sampler'

export class SamplerAmpTimeVelocity extends SamplerParam {
    constructor() {
        super()
        this.name = 'AmpTimeVelocity'
        this.displayName = 'Time'
        this.path = 'parameters 71'
        this.inputRange = [-100, 100]
    }
}
