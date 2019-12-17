import { SamplerParam } from './sampler'

export class SamplerFilterLfo extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterLfo'
        this.displayName = 'Filter'
        this.path = 'parameters 102'
        this.inputRange = [0, 24]
    }
}
