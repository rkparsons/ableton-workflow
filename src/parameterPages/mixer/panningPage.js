import { MixerPage } from './mixerPage'
import { MixerPanning } from '../../parameters/mixer/panning'

export class PanningPage extends MixerPage {
    constructor(pageIndex, pathToRack, chainCount) {
        super(pageIndex, pathToRack, chainCount, 'Panning', MixerPanning)
    }
}