import { MixerPage } from './mixerPage'
import { MixerVolume } from '../../parameters/mixer/volume'

export class VolumePage extends MixerPage {
    constructor(pageIndex, pathToRack, chainCount) {
        super(pageIndex, pathToRack, chainCount, 'Volume', MixerVolume)
    }
}
