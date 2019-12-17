import { SamplerParam } from './sampler'

export class SamplerOscFreq extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'OscFreq'
        this.displayName = 'Freq'
        this.path = 'parameters 12'
    }
}
