import { SamplerParam } from './sampler'

export class SamplerOscLevel extends SamplerParam {
    constructor() {
        super()
        this.name = 'OscLevel'
        this.displayName = 'Amount'
        this.path = 'parameters 7'
    }
}
