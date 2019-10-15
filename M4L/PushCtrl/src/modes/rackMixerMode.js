import { DrumTrackMode } from './drumTrackMode'
import { command } from '../constants'

export class RackMixerMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    handleTrackSelectButtons([, isPressed, buttonIndex]) {
        //todo: refactor out isPressed check
        if (!isPressed) {
            return
        }

        this.drumRack.setActiveMixerPage(buttonIndex)
        this.updateDisplay()
    }

    executePageLevelCommand(targetCommand) {
        const page = this.drumRack.getActiveMixerPage()
        targetCommand === command.DEFAULT ? page.default() : page.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const param = this.drumRack.getActiveMixerPage().getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        this.updateDisplay()
    }

    sendValue([, value, encoderIndex]) {
        this.drumRack
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        const drumRackMixerPage = this.drumRack.getActiveMixerPage()
        const mixerPageNames = this.drumRack.getMixerPages().map(page => page.getName())
        const activeMixerPageIndex = this.drumRack.getActiveMixerPage().getIndex()

        this.controlSurface.display.line(0, this.drumRack.getDrumPads().map(pad => pad.getName()))
        this.controlSurface.display.line(1, drumRackMixerPage.getParameters().map(parameter => parameter.getDisplayValue()))
        this.controlSurface.display.title(2, [])
        this.controlSurface.display.menu(3, mixerPageNames, activeMixerPageIndex)
        this.controlSurface.trackSelect.map(mixerPageNames.length, activeMixerPageIndex)
        this.controlSurface.trackState.map([])
    }
}
