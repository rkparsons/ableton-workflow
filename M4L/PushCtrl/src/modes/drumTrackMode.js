//todo: call updateDisplay after everything
export class DrumTrackMode {
    constructor(drumRack, controlSurface) {
        this.drumRack = drumRack
        this.controlSurface = controlSurface
    }

    handleTempoControl() {}

    handleTrackSelectButtons() {}

    handleTrackStateButtons() {}

    executePageLevelCommand() {}

    executeParamLevelCommand() {}

    sendValue() {}

    updateDisplay() {
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (!activeDrumPad) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, ['Blank'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        }
    }
}
