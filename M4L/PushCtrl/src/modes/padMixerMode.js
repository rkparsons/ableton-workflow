import { command, mode } from '../constants'

import { DrumTrackMode } from './drumTrackMode'

export class PadMixerMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.PAD_MIXER
    }

    observe() {
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        activeDrumPad
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())

        activeDrumPad.getDrumLayers().forEach(drumLayer => drumLayer.getMuteParameter().observe())
    }

    ignore() {
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        activeDrumPad
            .getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())

        activeDrumPad.getDrumLayers().forEach(drumLayer => drumLayer.getMuteParameter().ignore())
    }

    handleTrackSelectButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        this.ignore()
        this.drumRack.getActiveDrumPad().setActiveMixerPage(buttonIndex)
        this.observe()
    }

    handleTrackStateButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        const muteParameter = this.drumRack
            .getActiveDrumPad()
            .getDrumLayers()
            [buttonIndex].getMuteParameter()

        muteParameter.setValue(!Boolean(muteParameter.getValue()))

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

    sendValue(value, encoderIndex) {
        this.drumRack
            .getActiveDrumPad()
            .getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (activeDrumPad) {
            const drumPadMixerPage = activeDrumPad.getActiveMixerPage()
            const drumPadMixerPageNames = activeDrumPad.getMixerPages().map(page => page.getName())
            // todo: replace Boolean with isMuted layer function
            const layerOnStates = activeDrumPad.getDrumLayers().map(layer => !Boolean(layer.getMuteParameter().getValue()))
            const displayValues = drumPadMixerPage.getParameters().map((parameter, index) => (layerOnStates[index] ? parameter.getDisplayValue() : ''))
            const drumLayerNames = activeDrumPad ? activeDrumPad.getDrumLayers().map(layer => layer.getName()) : null

            this.controlSurface.display.line(0, drumLayerNames)
            this.controlSurface.display.line(1, displayValues)
            this.controlSurface.display.title(2, [activeDrumPad.getName()])
            this.controlSurface.display.menu(3, drumPadMixerPageNames, drumPadMixerPage.getIndex())
            this.controlSurface.trackSelect.map(drumPadMixerPageNames.length, drumPadMixerPage.getIndex())
            this.controlSurface.trackState.map(layerOnStates)
        } else {
            this.displayBlankPad()
        }
    }
}
