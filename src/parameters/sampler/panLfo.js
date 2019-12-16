import { SamplerParam } from './sampler'

export class SamplerPanLfo extends SamplerParam {
    constructor() {
        super()
        this.name = 'PanLfo'
        this.displayName = 'Pan'
        this.path = 'parameters 57'
    }
}
