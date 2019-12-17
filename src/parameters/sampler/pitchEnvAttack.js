import { SamplerParam } from './sampler'

export class SamplerPitchEnvAttack extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'PitchEnvAttack'
        this.displayName = 'A /'
        this.path = 'parameters 39'
    }
}
