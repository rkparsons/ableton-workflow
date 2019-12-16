import { SamplerParam } from './sampler'

export class SamplerOscVelocity extends SamplerParam {
    constructor() {
        super()
        this.name = 'OscVelocity'
        this.displayName = 'Osc'
        this.path = 'parameters 8'
    }
}
