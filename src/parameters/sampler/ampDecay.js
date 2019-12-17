import { SamplerParam } from './sampler'

export class SamplerAmpDecay extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'AmpDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 62'
        this.defaultValue = 1
    }
}
