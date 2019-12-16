import { SamplerParam } from './sampler'
import unitType from '../../constants/unitType'

export class SamplerPitchEnv extends SamplerParam {
    constructor() {
        super()
        this.name = 'PitchEnv'
        this.displayName = 'Env'
        this.path = 'parameters 38'
        this.inputRange = [-48, 48]
        this.unitType = unitType.INT
    }
}
