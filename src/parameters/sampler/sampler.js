import { Param } from '../param'

export class SamplerParam extends Param {
    constructor(pathToChain, deviceTypeToIndex) {
        super()
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
    }
}
