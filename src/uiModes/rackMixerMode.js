import { DrumTrackMode } from './drumTrackMode'
import command from '../constants/command'
import mode from '../constants/mode'

export class RackMixerMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.RACK_MIXER
    }

    observe() {
        this.drumRack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())
    }

    ignore() {
        this.drumRack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())
    }

    handleTrackSelectButtons(isPressed, buttonIndex) {
        //todo: refactor out isPressed check
        if (!isPressed) {
            return
        }

        this.ignore()
        this.drumRack.setActiveMixerPage(buttonIndex)
        this.observe()
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

    sendValue(value, encoderIndex) {
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

        this.controlSurface.display.line(
            0,
            this.drumRack
                .getDrumPads()
                .map(pad => pad.getInstrumentRack().getName())
                .slice(0, 8)
        )
        this.controlSurface.display.line(
            1,
            drumRackMixerPage
                .getParameters()
                .map(parameter => parameter.getDisplayValue())
                .slice(0, 8)
        )
        this.controlSurface.display.title(2, [])
        this.controlSurface.display.menu(3, mixerPageNames, activeMixerPageIndex)
        this.controlSurface.trackSelect.map(mixerPageNames.length, activeMixerPageIndex)
        this.controlSurface.trackState.map([])
    }
}
