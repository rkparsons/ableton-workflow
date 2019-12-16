import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerCategory extends SamplerParam {
    constructor() {
        super()
        this.name = 'Category'
        this.displayName = 'Category'
        this.path = 'parameters 29'
        this.options = []
        this.unitType = unitType.ENUM
    }
}
