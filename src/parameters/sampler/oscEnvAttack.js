import { SamplerParam } from './sampler'

export class SamplerOscEnvAttack extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'OscEnvAttack'
        this.displayName = 'A /'
        this.path = 'parameters 14'
    }
}
