import { SamplerParam } from './sampler'

export class SamplerFilterVelocity extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterVelocity'
        this.displayName = 'Filter'
        this.path = 'parameters 101'
    }
}
