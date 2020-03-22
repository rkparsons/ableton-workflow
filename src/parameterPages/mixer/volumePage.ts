import { MixerPage } from '~/parameterPages/mixer/mixerPage'
import { MixerVolume } from '~/parameters/mixer/volume'

export class VolumePage extends MixerPage {
    constructor(pageIndex: number, pathToRack: string, chainCount: number) {
        super(pageIndex, pathToRack, chainCount, 'Volume', MixerVolume)
    }
}
