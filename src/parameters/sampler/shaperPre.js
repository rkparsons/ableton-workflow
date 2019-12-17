import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerShaperPre extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'ShaperPre'
        this.displayName = 'Route'
        this.path = 'parameters 106'
        this.options = ['<<<', '>>>']
        this.unitType = unitType.ENUM
    }
}
