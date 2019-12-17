import { SamplerParam } from './sampler'

export class SamplerFilterEnv extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'FilterEnv'
        this.displayName = 'Env'
        this.path = 'parameters 85'
        this.inputRange = [-72, 72]
    }
}
