import { DrumTrackMode } from './drumTrackMode'
import mode from '../constants/mode'

export class LayerFxMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.LAYER_FX
    }

    incrementDrumLayer() {
        this.ignore()
        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer()
        this.observe()
    }

    decrementDrumLayer() {
        this.ignore()
        this.drumRack.getActiveDrumPad().decrementActiveDrumLayer()
        this.observe()
    }

    updateDisplay() {
        //todo: replace blank layer with separate mode
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (activeDrumPad) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumPad.getActiveChain().getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else {
            this.displayBlankPad()
        }
    }
}