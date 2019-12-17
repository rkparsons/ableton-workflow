import { SamplerParam } from './sampler'

export class SamplerOscLevel extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'OscLevel'
        this.displayName = 'Amount'
        this.path = 'parameters 7'
    }
}
