import { SamplerParam } from './sampler'

export class SamplerAmpAttack extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'AmpAttack'
        this.displayName = 'A /'
        this.path = 'parameters 59'
    }
}
