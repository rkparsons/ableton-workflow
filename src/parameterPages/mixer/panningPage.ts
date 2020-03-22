import { MixerPage } from '~/parameterPages/mixer/mixerPage'
import { MixerPanning } from '~/parameters/mixer/panning'

export class PanningPage extends MixerPage {
    constructor(pageIndex: number, pathToRack: string, chainCount: number) {
        super(pageIndex, pathToRack, chainCount, 'Panning', MixerPanning)
    }
}
