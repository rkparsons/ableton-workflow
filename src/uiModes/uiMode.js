//todo: call updateDisplay after everything
export class UiMode {
    constructor(rack, controlSurface) {
        this.rack = rack
        this.controlSurface = controlSurface
        this.command = null
    }

    activateControlSurface() {
        this.controlSurface.activate()
    }

    deactivateControlSurface() {
        this.controlSurface.deactivate()
    }

    observe() {}

    ignore() {}

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

        this.ignore()
        this.rack.setActiveDrumPad(drumPadId)
        this.observe()
    }

    incrementChain() {}

    decrementChain() {}

    updateDisplay() {}

    displayBlank() {
        this.controlSurface.display.line(0, [' '])
        this.controlSurface.display.line(1, [' '])
        this.controlSurface.display.title(2, ['Blank'])
        this.controlSurface.display.line(3, [' '])
        this.controlSurface.trackSelect.map(0, 0)
        this.controlSurface.trackState.map([])
    }
}
