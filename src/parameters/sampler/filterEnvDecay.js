import { SamplerParam } from './sampler'

export class SamplerFilterEnvDecay extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 89'
        this.defaultValue = 1
    }
}
