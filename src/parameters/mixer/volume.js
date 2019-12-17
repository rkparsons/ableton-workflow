import { MixerParam } from './mixer'

export class MixerVolume extends MixerParam {
    constructor(pathToChain) {
        super(pathToChain)
        this.name = 'Volume'
        this.path = 'volume'
        this.defaultValue = 0.85
    }
}
