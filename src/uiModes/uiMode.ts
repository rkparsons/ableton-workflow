import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { DrumRack } from '~/models/drumRack'
import Mode from '~/constants/mode'
import { Rack } from '~/models/rack'
import log from '~/util/log'

export abstract class UiMode {
    rack: Rack
    controlSurface: ControlSurface
    command?: Command

    constructor(rack: Rack, controlSurface: ControlSurface) {
        this.rack = rack
        this.controlSurface = controlSurface
    }

    abstract canHandle(modeType: Mode): boolean

    abstract observe(): void

    abstract ignore(): void

    abstract incrementSubPage(): void

    abstract decrementSubPage(): void

    abstract executePageLevelCommand(command: Command): void

    abstract executeParamLevelCommand(command: Command, index: number): void

    abstract sendValue(value: number, encoderIndex: number): void

    abstract handleTempoControl(encoderValue: number): void

    abstract handleTrackSelectButtons(isPressed: boolean, buttonIndex: number): void

    abstract handleTrackStateButtons(isPressed: boolean, buttonIndex: number): void

    abstract updateDisplay(): void

    getRack(): Rack | undefined {
        return this.rack
    }

    incrementChain() {
        this.ignore()
        this.rack.getActiveInstrumentRack()?.incrementActiveChain()
        this.observe()
    }

    decrementChain() {
        this.ignore()
        this.rack.getActiveInstrumentRack()?.decrementActiveChain()
        this.observe()
    }

    activateControlSurface() {
        this.controlSurface.activate()
    }

    deactivateControlSurface() {
        this.controlSurface.deactivate()
    }

    setCommand(command: Command, isPressed: boolean) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== undefined) {
            this.executePageLevelCommand(this.command)
            this.command = undefined
        }
    }

    handleTrackControlTouches(isPressed: boolean, encoderIndex: number) {
        if (isPressed && this.command !== undefined) {
            this.executeParamLevelCommand(this.command, encoderIndex)
            this.command = undefined
        }
    }

    // todo: move this into a subclass
    focusDrumPad(property: string, drumPadId: number) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.ignore()

        if (this.rack instanceof DrumRack) {
            this.rack.setActiveDrumPad(drumPadId)
        }

        const activeInstrumentRack = this.rack.getActiveInstrumentRack()
        const isBlank = !activeInstrumentRack || !activeInstrumentRack.getActiveChain()
        const track = this.rack.getTrack()

        if (isBlank && track) {
            track.toggleActive()
        } else {
            this.observe()
        }
    }

    displayBlank() {
        this.controlSurface.display.line(0, [' '])
        this.controlSurface.display.line(1, [' '])
        this.controlSurface.display.title(2, ['Blank'])
        this.controlSurface.display.line(3, [' '])
        this.controlSurface.trackSelect.map(0, 0)
        this.controlSurface.trackState.map([])
    }
}
