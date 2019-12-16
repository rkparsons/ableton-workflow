import { SamplerParam } from './sampler'

export class SamplerRepitch extends SamplerParam {
    constructor() {
        super()
        this.name = 'Repitch'
        this.displayName = 'Repitch'
        this.path = 'parameters 34'
        this.pathDecimal = 'parameters 35'
        this.inputRange = [-7.5, 7.5]
    }
}
