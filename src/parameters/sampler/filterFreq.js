import { SamplerParam } from './sampler'

export class SamplerFilterFreq extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterFreq'
        this.displayName = 'Freq'
        this.path = 'parameters 80'
        this.defaultValue = 1
    }
}
