import { SamplerParam } from './sampler'

export class SamplerVolumeVelocity extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'VolumeVelocity'
        this.displayName = 'Vol'
        this.path = 'parameters 54'
    }
}
