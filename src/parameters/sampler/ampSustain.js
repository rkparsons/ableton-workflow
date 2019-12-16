import { SamplerParam } from './sampler'

export class SamplerAmpSustain extends SamplerParam {
    constructor() {
        super()
        this.name = 'AmpSustain'
        this.displayName = 'S --'
        this.path = 'parameters 65'
        this.defaultValue = 1
    }
}
