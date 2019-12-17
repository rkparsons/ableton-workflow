import { SamplerParam } from './sampler'

export class SamplerPitchEnvDecay extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'PitchEnvDecay'
        this.displayName = 'D \\'
        this.path = 'parameters 42'
    }
}
