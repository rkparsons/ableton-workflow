import { DrumTrackMode } from './drumTrackMode'

export class LayerFxMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    updateDisplay() {
        //todo: replace blank layer with separate mode
        super.updateDisplay()
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (activeDrumPad) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumPad ? activeDrumPad.getActiveDrumLayer().getName() + ' FX' : 'Blank'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        }
    }
}
