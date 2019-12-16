import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerSelect extends SamplerParam {
    constructor() {
        super()
        this.name = 'Select'
        this.displayName = 'Sample'
        this.path = 'parameters 3'
        this.options = []
        this.unitType = unitType.ENUM
    }
}