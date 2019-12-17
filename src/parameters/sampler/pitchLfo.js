import { SamplerParam } from './sampler'

export class SamplerPitchLfo extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'PitchLfo'
        this.displayName = 'Pitch'
        this.path = 'parameters 36'
    }
}
