import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class ChainFxMode extends UiMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.CHAIN_FX
    }

    incrementChain() {
        this.ignore()
        this.drumRack.getActiveInstrumentRack().incrementActiveChain()
        this.observe()
    }

    decrementChain() {
        this.ignore()
        this.drumRack.getActiveInstrumentRack().decrementActiveChain()
        this.observe()
    }

    updateDisplay() {
        const activeInstrumentRack = this.drumRack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeInstrumentRack.getActiveChain().getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else {
            this.displayBlankPad()
        }
    }
}
