import { MixerParam } from './mixer'

export class MixerPanning extends MixerParam {
    constructor(pathToChain) {
        super(pathToChain)
        this.name = 'Panning'
        this.path = 'panning'
        this.inputRange = [-1, 1]
    }
}
