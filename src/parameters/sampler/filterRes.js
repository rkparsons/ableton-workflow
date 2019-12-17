import { SamplerParam } from './sampler'

export class SamplerFilterRes extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterRes'
        this.displayName = 'Res'
        this.path = 'parameters 81'
        this.inputRange = [0, 1.25]
    }
}
