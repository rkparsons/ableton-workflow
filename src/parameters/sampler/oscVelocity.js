import { SamplerParam } from './sampler'

export class SamplerOscVelocity extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'OscVelocity'
        this.displayName = 'Osc'
        this.path = 'parameters 8'
    }
}
