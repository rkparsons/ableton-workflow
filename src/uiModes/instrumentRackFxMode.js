import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class InstrumentRackFxMode extends UiMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INSTRUMENT_RACK_FX
    }

    updateDisplay() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeInstrumentRack.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else {
            this.displayBlank()
        }
    }
}
