import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { DrumRack } from '~/models/drumRack'
import Mode from '~/constants/mode'
import { Rack } from '~/models/rack'
import { UiMode } from '~/uiModes/uiMode'

export class InactiveMode extends UiMode {
    constructor(rack: Rack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType: Mode) {
        return modeType === Mode.INACTIVE
    }

    // todo: move this into a subclass
    focusDrumPad(property: string, drumPadId: number) {
        if (property !== 'selected_drum_pad' || !(this.rack instanceof DrumRack)) {
            return
        }

        this.rack.setActiveDrumPad(drumPadId)

        if (this.rack.getActiveInstrumentRack()) {
            this.rack.getTrack()?.toggleActive()
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

    updateDisplay() {}
}
