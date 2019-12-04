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
        const activeInstrumentRack = this.drumRack.getActiveDrumPad().getInstrumentRack()

        activeInstrumentRack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())

        activeInstrumentRack.getChains().forEach(drumLayer => drumLayer.getMuteParameter().observe())
    }

    ignore() {
        const activeActiveInstrumentRack = this.drumRack.getActiveDrumPad().getInstrumentRack()

        activeActiveInstrumentRack
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())

        activeActiveInstrumentRack.getChains().forEach(drumLayer => drumLayer.getMuteParameter().ignore())
    }

    handleTrackSelectButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        this.ignore()
        this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .setActiveMixerPage(buttonIndex)
        this.observe()
    }

    handleTrackStateButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        const muteParameter = this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .getChains()
            [buttonIndex].getMuteParameter()

        muteParameter.setValue(!Boolean(muteParameter.getValue()))

        this.updateDisplay()
    }

    executePageLevelCommand(targetCommand) {
        const page = this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .getActiveMixerPage()
        targetCommand === command.DEFAULT ? page.default() : page.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const param = this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        this.updateDisplay()
    }

    sendValue(value, encoderIndex) {
        this.drumRack
            .getActiveDrumPad()
            .getInstrumentRack()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        const activeInstrumentRack = this.drumRack.getActiveDrumPad().getInstrumentRack()

        if (activeInstrumentRack) {
            const drumPadMixerPage = activeInstrumentRack.getActiveMixerPage()
            const drumPadMixerPageNames = activeInstrumentRack.getMixerPages().map(page => page.getName())
            // todo: replace Boolean with isMuted layer function
            const layerOnStates = activeInstrumentRack.getChains().map(layer => !Boolean(layer.getMuteParameter().getValue()))
            const displayValues = drumPadMixerPage.getParameters().map((parameter, index) => (layerOnStates[index] ? parameter.getDisplayValue() : ''))
            const drumLayerNames = activeInstrumentRack ? activeInstrumentRack.getChains().map(layer => layer.getName()) : null

            this.controlSurface.display.line(0, drumLayerNames)
            this.controlSurface.display.line(1, displayValues)
            this.controlSurface.display.title(2, [activeInstrumentRack.getName()])
            this.controlSurface.display.menu(3, drumPadMixerPageNames, drumPadMixerPage.getIndex())
            this.controlSurface.trackSelect.map(drumPadMixerPageNames.length, drumPadMixerPage.getIndex())
            this.controlSurface.trackState.map(layerOnStates)
        } else {
            this.displayBlankPad()
        }
    }
}
