import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class ChainFxMode extends UiMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.CHAIN_FX
    }

    incrementDrumLayer() {
        this.ignore()
        this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .incrementActiveChain()
        this.observe()
    }

    decrementDrumLayer() {
        this.ignore()
        this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .decrementActiveChain()
        this.observe()
    }

    updateDisplay() {
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (activeDrumPad) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [
                activeDrumPad
                    .getInstrumentRack()
                    .getActiveChain()
                    .getName() + ' FX',
            ])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else {
            this.displayBlankPad()
        }
    }
}
