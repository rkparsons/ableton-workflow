import { SamplerParam } from './sampler'

export class SamplerFilterLfo extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterLfo'
        this.displayName = 'Filter'
        this.path = 'parameters 102'
        this.inputRange = [0, 24]
    }
}
