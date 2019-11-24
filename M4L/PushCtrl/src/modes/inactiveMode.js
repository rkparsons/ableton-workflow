import { DrumTrackMode } from './drumTrackMode'
import { mode } from '../constants'

export class InactiveMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INACTIVE
    }

    setLayer() {}

    observe() {}

    ignore() {}

    updateDisplay() {
        this.controlSurface.deactivate()
    }
}
