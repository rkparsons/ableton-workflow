import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { InstrumentRack } from '~/models/instrumentRack'
import Mode from '~/constants/mode'
import { UiMode } from '~/uiModes/uiMode'

export class InstrumentRackFxMode extends UiMode {
    constructor(rack: InstrumentRack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType: Mode) {
        return modeType === Mode.INSTRUMENT_RACK_FX
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

    observe() {}

    ignore() {}

    executePageLevelCommand(command: Command) {}

    executeParamLevelCommand(command: Command, index: number) {}

    sendValue(value: number, encoderIndex: number) {}

    handleTempoControl(encoderValue: number) {}

    handleTrackSelectButtons(isPressed: boolean, buttonIndex: number) {}

    handleTrackStateButtons(isPressed: boolean, buttonIndex: number) {}
}
