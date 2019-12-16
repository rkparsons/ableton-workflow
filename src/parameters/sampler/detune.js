import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerDetune extends SamplerParam {
    constructor() {
        super()
        this.name = 'Detune'
        this.displayName = '- / +'
        this.path = 'parameters 35'
        this.inputRange = [-50, 50]
        this.unitType = unitType.INT
    }
}
