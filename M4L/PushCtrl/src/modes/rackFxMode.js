import { DrumTrackMode } from './drumTrackMode'
import { mode } from '../constants'

export class RackFxMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.RACK_FX
    }

    updateDisplay() {
        this.controlSurface.display.line(0, [' '])
        this.controlSurface.display.line(1, [' '])
        this.controlSurface.display.title(2, ['FX'])
        this.controlSurface.display.line(3, [' '])
        this.controlSurface.trackSelect.map(0, 0)
        this.controlSurface.trackState.map([])
    }
}
