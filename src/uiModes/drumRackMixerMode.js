import { UiMode } from './uiMode'
import command from '../constants/command'
import mode from '../constants/mode'

export class DrumRackMixerMode extends UiMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.DRUM_RACK_MIXER
    }

    observe() {
        this.rack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())
    }

    ignore() {
        this.rack
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
        this.rack.setActiveMixerPage(buttonIndex)
        this.observe()
    }

    executePageLevelCommand(targetCommand) {
        const page = this.rack.getActiveMixerPage()
        targetCommand === command.DEFAULT ? page.default() : page.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const param = this.rack.getActiveMixerPage().getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        this.updateDisplay()
    }

    sendValue(value, encoderIndex) {
        this.rack
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        const drumRackMixerPage = this.rack.getActiveMixerPage()
        const mixerPageNames = this.rack.getMixerPages().map(page => page.getName())
        const activeMixerPageIndex = this.rack.getActiveMixerPage().getIndex()

        this.controlSurface.display.line(
            0,
            this.rack
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
