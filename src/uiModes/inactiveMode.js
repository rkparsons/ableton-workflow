import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class InactiveMode extends UiMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INACTIVE
    }

    focusDrumPad(property, drumPadId) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.rack.setActiveDrumPad(drumPadId)

        if (this.rack.getActiveInstrumentRack()) {
            this.rack.getTrack().toggleActive()
        }
    }

    updateDisplay() {}
}
