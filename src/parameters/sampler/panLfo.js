import { SamplerParam } from './sampler'

export class SamplerPanLfo extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'PanLfo'
        this.displayName = 'Pan'
        this.path = 'parameters 57'
    }
}
