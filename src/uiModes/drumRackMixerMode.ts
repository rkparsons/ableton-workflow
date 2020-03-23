import { ControlSurface } from '~/models/controlSurface'
import { DrumRack } from '~/models/drumRack'
import { MixerMode } from './mixerMode'
import Mode from '~/constants/mode'

export class DrumRackMixerMode extends MixerMode {
    constructor(rack: DrumRack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    getRack() {
        return this.rack as DrumRack
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

    canHandle(modeType: Mode) {
        return modeType === Mode.DRUM_RACK_MIXER
    }

    getTitle() {
        return ''
    }

    handleTempoControl(encoderValue: number) {}
}
