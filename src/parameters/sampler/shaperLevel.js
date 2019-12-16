import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerShaperLevel extends SamplerParam {
    constructor() {
        super()
        this.name = 'ShaperLevel'
        this.displayName = '- / +'
        this.path = 'parameters 105'
        this.inputRange = [0, 100]
        this.unitType = unitType.INT
    }
}
