import { SamplerParam } from './sampler'

export class SamplerRepitch extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'Repitch'
        this.displayName = 'Repitch'
        this.path = 'parameters 34'
        this.pathDecimal = 'parameters 35'
        this.inputRange = [-7.5, 7.5]
    }
}
