import { SamplerParam } from './sampler'

export class SamplerAmpRelease extends SamplerParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'AmpRelease'
        this.displayName = 'R \\'
        this.path = 'parameters 66'
        this.defaultValue = 1
    }
}
