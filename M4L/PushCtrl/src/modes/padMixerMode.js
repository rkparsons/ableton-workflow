import { DrumTrackMode } from './drumTrackMode'
import { command } from '../constants'

export class PadMixerMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    handleTrackSelectButtons([, isPressed, buttonIndex]) {
        if (!isPressed) {
            return
        }

        this.drumRack.getActiveDrumPad().setActiveMixerPage(buttonIndex)
        this.updateDisplay()
    }

    handleTrackStateButtons([, isPressed, buttonIndex]) {
        if (!isPressed) {
            return
        }

        const muteParameter = this.drumRack
            .getActiveDrumPad()
            .getDrumLayers()
            [buttonIndex].getMuteParameter()

        const newMuteValue = muteParameter.getValue() === 0 ? 1 : 0
        muteParameter.setValue(newMuteValue)

        this.updateDisplay()
    }

    executePageLevelCommand(targetCommand) {
        const page = this.drumRack.getActiveDrumPad().getActiveMixerPage()
        targetCommand === command.DEFAULT ? page.default() : page.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const param = this.drumRack
            .getActiveDrumPad()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        this.updateDisplay()
    }

    sendValue([, value, encoderIndex]) {
        this.drumRack
            .getActiveDrumPad()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        super.updateDisplay()
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (activeDrumPad) {
            const drumPadMixerPage = activeDrumPad.getActiveMixerPage()
            const drumPadMixerPageNames = activeDrumPad.getMixerPages().map(page => page.getName())
            const layerOnStates = activeDrumPad.getDrumLayers().map(layer => (layer.getMuteParameter().getValue() === 0 ? 1 : 0))
            const displayValues = drumPadMixerPage.getParameters().map((parameter, index) => (layerOnStates[index] ? parameter.getDisplayValue() : ''))
            const drumLayerNames = activeDrumPad ? activeDrumPad.getDrumLayers().map(layer => layer.getName()) : null

            this.controlSurface.display.line(0, drumLayerNames)
            this.controlSurface.display.line(1, displayValues)
            this.controlSurface.display.title(2, [activeDrumPad.getName()])
            this.controlSurface.display.menu(3, drumPadMixerPageNames, drumPadMixerPage.getIndex())
            this.controlSurface.trackSelect.map(drumPadMixerPageNames.length, drumPadMixerPage.getIndex())
            this.controlSurface.trackState.map(layerOnStates)
        }
    }
}
