import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerShaperLevel extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'ShaperLevel'
        this.displayName = '- / +'
        this.path = 'parameters 105'
        this.inputRange = [0, 100]
        this.unitType = unitType.INT
    }
}
