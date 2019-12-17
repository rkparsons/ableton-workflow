import { SamplerParam } from './sampler'

export class SamplerVolumeLfo extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'VolumeLfo'
        this.displayName = 'Vol'
        this.path = 'parameters 55'
    }
}
