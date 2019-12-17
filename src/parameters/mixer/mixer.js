import { Param } from '../param'

export class MixerParam extends Param {
    constructor(pathToChain) {
        super()
        this.basePath = `${pathToChain} mixer_device`
    }
}
