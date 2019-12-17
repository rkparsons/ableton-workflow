import { SamplerParam } from './sampler'

export class SamplerFilterVelocity extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterVelocity'
        this.displayName = 'Filter'
        this.path = 'parameters 101'
    }
}
