import { SamplerParam } from './sampler'

export class SamplerFilterEnvAttack extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterEnvAttack'
        this.displayName = 'A /'
        this.path = 'parameters 86'
    }
}
