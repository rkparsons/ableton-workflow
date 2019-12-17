import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerAmpLoop extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'AmpLoop'
        this.displayName = 'Loop'
        this.path = 'parameters 68'
        this.options = ['none', 'loop', 'beat', 'sync', 'trig']
        this.unitType = unitType.ENUM
    }
}
