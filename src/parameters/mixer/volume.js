import { MixerParam } from './mixer'

export class MixerVolume extends MixerParam {
    constructor() {
        super()
        this.name = 'Volume'
        this.path = 'mixer_device volume'
        this.defaultValue = 0.85
    }
}
