import { MixerMode } from './mixerMode'
import mode from '../constants/mode'

export class DrumRackMixerMode extends MixerMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.DRUM_RACK_MIXER
    }

    getTitle() {
        return ''
    }

    updateDisplay() {
        super.updateDisplay()
        const displayValues = this.getRack()
            .getActiveMixerPage()
            .getParameters()
            .map(parameter => parameter.getDisplayValue())
            .slice(0, 8)

        this.controlSurface.display.line(1, displayValues)
        this.controlSurface.trackState.map([])
    }
}
