import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerFilterType extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterType'
        this.displayName = 'Type'
        this.path = 'parameters 76'
        this.options = ['low -\\', 'high /-', 'band /\\', 'notch \\/']
        this.unitType = unitType.ENUM
    }
}
