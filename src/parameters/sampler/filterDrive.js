import { SamplerParam } from './sampler'

export class SamplerFilterDrive extends SamplerParam {
    constructor() {
        super()
        this.name = 'FilterDrive'
        this.displayName = 'Drive'
        this.path = 'parameters 83'
        this.inputRange = [0, 24]
    }
}
