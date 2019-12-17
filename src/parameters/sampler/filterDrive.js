import { SamplerParam } from './sampler'

export class SamplerFilterDrive extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterDrive'
        this.displayName = 'Drive'
        this.path = 'parameters 83'
        this.inputRange = [0, 24]
    }
}
