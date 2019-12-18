import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class ChainFxMode extends UiMode {
    // rename directory as strategies
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.CHAIN_FX
    }

    incrementChain() {
        this.ignore()
        this.rack.getActiveInstrumentRack().incrementActiveChain()
        this.observe()
    }

    decrementChain() {
        this.ignore()
        this.rack.getActiveInstrumentRack().decrementActiveChain()
        this.observe()
    }

    updateDisplay() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeInstrumentRack.getActiveChain().getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else {
            this.displayBlank()
        }
    }
}
