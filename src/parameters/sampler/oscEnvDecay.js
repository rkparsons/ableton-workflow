import { SamplerParam } from './sampler'

export class SamplerOscEnvDecay extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'OscEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 17'
        this.defaultValue = 1
    }
}
