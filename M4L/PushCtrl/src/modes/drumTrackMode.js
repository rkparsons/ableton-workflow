//todo: call updateDisplay after everything
export class DrumTrackMode {
    constructor(drumRack, controlSurface) {
        this.drumRack = drumRack
        this.controlSurface = controlSurface
        this.command = null
    }

    activate() {
        this.drumRack.observe()
        this.controlSurface.activate()
    }

    deactivate() {
        this.drumRack.ignore()
        this.controlSurface.deactivate()
    }

    setCommand(command, isPressed) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== null) {
            this.executePageLevelCommand(this.command)
            this.command = null
        }
    }

    handleTrackControlTouches(isPressed, encoderIndex) {
        if (isPressed && this.command !== null) {
            this.executeParamLevelCommand(this.command, encoderIndex)
            this.command = null
        }
    }

    focusDrumPad(property, drumPadId) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.drumRack.setActiveDrumPad(drumPadId)
        this.updateDisplay()
    }

    incrementDrumLayer() {
        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer()
        this.updateDisplay()
    }

    decrementDrumLayer() {
        this.drumRack.getActiveDrumPad().decrementActiveDrumLayer()
        this.updateDisplay()
    }

    updateDisplay() {}

    displayBlankPad() {
        this.controlSurface.display.line(0, [' '])
        this.controlSurface.display.line(1, [' '])
        this.controlSurface.display.title(2, ['Blank'])
        this.controlSurface.display.line(3, [' '])
        this.controlSurface.trackSelect.map(0, 0)
        this.controlSurface.trackState.map([])
    }
}
