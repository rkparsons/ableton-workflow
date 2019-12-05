import { MixerMode } from './mixerMode'
import mode from '../constants/mode'

export class DrumRackMixerMode extends MixerMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    observe() {
        super.observe()
        const drumPad = this.getRack().getActiveDrumPad()

        if (drumPad) {
            drumPad.getMuteParameter().observe()
        }
    }

    ignore() {
        super.ignore()
        const drumPad = this.getRack().getActiveDrumPad()

        if (drumPad) {
            drumPad.getMuteParameter().ignore()
        }
    }

    canHandle(modeType) {
        return modeType === mode.DRUM_RACK_MIXER
    }

    getTitle() {
        return ''
    }
}
