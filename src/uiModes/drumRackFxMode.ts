import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { DrumRack } from '~/models/drumRack'
import Mode from '~/constants/mode'
import { UiMode } from '~/uiModes/uiMode'

export class DrumRackFxMode extends UiMode {
    constructor(rack: DrumRack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType: Mode) {
        return modeType === Mode.DRUM_RACK_FX
    }

    updateDisplay() {
        this.controlSurface.display.line(0, [' '])
        this.controlSurface.display.line(1, [' '])
        this.controlSurface.display.title(2, ['FX'])
        this.controlSurface.display.line(3, [' '])
        this.controlSurface.trackSelect.map(0, 0)
        this.controlSurface.trackState.map([])
    }

    observe() {}

    ignore() {}

    incrementSubPage() {}

    decrementSubPage() {}

    executePageLevelCommand(command: Command) {}

    executeParamLevelCommand(command: Command, index: number) {}

    sendValue(value: number, encoderIndex: number) {}

    handleTempoControl(encoderValue: number) {}

    handleTrackSelectButtons(isPressed: boolean, buttonIndex: number) {}

    handleTrackStateButtons(isPressed: boolean, buttonIndex: number) {}
}
