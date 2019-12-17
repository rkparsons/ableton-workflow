import { SamplerRepitch } from './repitch'

export class SamplerRepitchWarp extends SamplerRepitch {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.isWarp = true
    }
}
