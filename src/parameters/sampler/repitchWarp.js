import { SamplerRepitch } from './repitch'

export class SamplerRepitchWarp extends SamplerRepitch {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.isWarp = true
    }
}
