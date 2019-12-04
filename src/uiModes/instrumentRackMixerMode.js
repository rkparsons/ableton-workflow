import { UiMode } from './uiMode'
import command from '../constants/command'
import mode from '../constants/mode'

export class InstrumentRackMixerMode extends UiMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INSTRUMENT_RACK_MIXER
    }

    observe() {
        const activeInstrumentRack = this.drumRack.getActiveInstrumentRack()

        activeInstrumentRack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())

        activeInstrumentRack.getChains().forEach(chain => chain.getMuteParameter().observe())
    }

    ignore() {
        const activeInstrumentRack = this.drumRack.getActiveInstrumentRack()

        activeInstrumentRack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())

        activeInstrumentRack.getChains().forEach(chain => chain.getMuteParameter().ignore())
    }

    handleTrackSelectButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        this.ignore()
        this.drumRack.getActiveInstrumentRack().setActiveMixerPage(buttonIndex)
        this.observe()
    }

    handleTrackStateButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        const muteParameter = this.drumRack
            .getActiveInstrumentRack()
            .getChains()
            [buttonIndex].getMuteParameter()

        muteParameter.setValue(!Boolean(muteParameter.getValue()))

        this.updateDisplay()
    }

    executePageLevelCommand(targetCommand) {
        const page = this.drumRack.getActiveInstrumentRack().getActiveMixerPage()
        targetCommand === command.DEFAULT ? page.default() : page.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const param = this.drumRack
            .getActiveInstrumentRack()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        this.updateDisplay()
    }

    sendValue(value, encoderIndex) {
        this.drumRack
            .getActiveInstrumentRack()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        const activeInstrumentRack = this.drumRack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const drumPadMixerPage = activeInstrumentRack.getActiveMixerPage()
            const drumPadMixerPageNames = activeInstrumentRack.getMixerPages().map(page => page.getName())
            // todo: replace Boolean with isMuted chain function
            const chainOnStates = activeInstrumentRack.getChains().map(chain => !Boolean(chain.getMuteParameter().getValue()))
            const displayValues = drumPadMixerPage.getParameters().map((parameter, index) => (chainOnStates[index] ? parameter.getDisplayValue() : ''))
            const chainNames = activeInstrumentRack ? activeInstrumentRack.getChains().map(chain => chain.getName()) : null

            this.controlSurface.display.line(0, chainNames)
            this.controlSurface.display.line(1, displayValues)
            this.controlSurface.display.title(2, [activeInstrumentRack.getName()])
            this.controlSurface.display.menu(3, drumPadMixerPageNames, drumPadMixerPage.getIndex())
            this.controlSurface.trackSelect.map(drumPadMixerPageNames.length, drumPadMixerPage.getIndex())
            this.controlSurface.trackState.map(chainOnStates)
        } else {
            this.displayBlankPad()
        }
    }
}
