import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerCategory extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'Category'
        this.displayName = 'Category'
        this.path = 'parameters 29'
        this.options = []
        this.unitType = unitType.ENUM
        this.isCategory = true
    }
}
