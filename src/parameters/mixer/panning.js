import { MixerParam } from './mixer'

export class MixerPanning extends MixerParam {
    constructor() {
        super()
        this.name = 'Panning'
        this.path = 'mixer_device panning'
        this.inputRange = [-1, 1]
    }
}
