import { UiMode } from './uiMode'
import command from '../constants/command'
import mode from '../constants/mode'

export class MixerMode extends UiMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    observe() {
        this.getRack()
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())
    }

    ignore() {
        this.getRack()
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())
    }

    handleTrackSelectButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        this.ignore()
        this.getRack().setActiveMixerPage(buttonIndex)
        this.observe()
    }

    handleTrackStateButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        const muteParameter = this.getRack()
            .getChains()
            [buttonIndex].getMuteParameter()

        muteParameter.setValue(!Boolean(muteParameter.getValue()))

        //todo: are these update displays needed? as a value was updated
        this.updateDisplay()
    }

    executePageLevelCommand(targetCommand) {
        const page = this.getRack().getActiveMixerPage()
        targetCommand === command.DEFAULT ? page.default() : page.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const param = this.getRack()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        this.updateDisplay()
    }

    sendValue(value, encoderIndex) {
        this.getRack()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        if (!this.getRack()) {
            this.displayBlank()
            return
        }
        const mixerPage = this.getRack().getActiveMixerPage()
        const mixerPageNames = this.getRack()
            .getMixerPages()
            .map(page => page.getName())

        this.controlSurface.display.title(2, [this.getTitle()])
        this.controlSurface.display.menu(3, mixerPageNames, mixerPage.getIndex())
        this.controlSurface.trackSelect.map(mixerPageNames.length, mixerPage.getIndex())
    }
}
