import { mode, command } from '../constants'

export function DrumTrackMode(drumRack, controlSurface) {
    this.mode = mode.LAYER_PARAMS
    this.command = null
    this.drumRack = drumRack
    this.controlSurface = controlSurface

    this.setMode = function(targetMode) {
        this.mode = targetMode
    }

    this.setCommand = function(command, [, isPressed]) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== null) {
            this.executePageLevelCommand(this.command)
            this.command = null
        }
    }

    this.handleTempoControl = function([, encoderValue]) {
        if (this.mode === mode.LAYER_PARAMS) {
            const sampleParameter = this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
                .getSampleParameter()

            if (!sampleParameter) {
                return
            }

            if (encoderValue === 1) {
                sampleParameter.increment()
            } else if (encoderValue === 127) {
                sampleParameter.decrement()
            }

            this.updateDisplay()
        }
    }

    this.handleTrackSelectButtons = function([, isPressed, buttonIndex]) {
        if (!isPressed) {
            return
        }

        if (this.mode === mode.RACK_MIXER) {
            this.drumRack.setActiveMixerPage(buttonIndex)
            this.updateDisplay()
        } else if (this.mode === mode.LAYER_PARAMS) {
            const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()
            const isMuted = activeDrumLayer.getMuteParameter().getValue() === 1

            if (!isMuted) {
                activeDrumLayer.setActiveParameterPage(buttonIndex)
                this.updateDisplay()
            }
        } else if (this.mode === mode.PAD_MIXER) {
            this.drumRack.getActiveDrumPad().setActiveMixerPage(buttonIndex)
            this.updateDisplay()
        }
    }

    this.handleTrackStateButtons = function([, isPressed, buttonIndex]) {
        if (!isPressed) {
            return
        }

        if (this.mode === mode.PAD_MIXER) {
            const muteParameter = this.drumRack
                .getActiveDrumPad()
                .getDrumLayers()
                [buttonIndex].getMuteParameter()

            const newMuteValue = muteParameter.getValue() === 0 ? 1 : 0
            muteParameter.setValue(newMuteValue)
        } else if (this.mode === mode.LAYER_PARAMS && buttonIndex === 0) {
            const muteParameter = this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getMuteParameter()
            const newMuteValue = muteParameter.getValue() === 0 ? 1 : 0
            muteParameter.setValue(newMuteValue)
        }

        this.updateDisplay()
    }

    this.executePageLevelCommand = function() {
        if (this.mode === mode.LAYER_PARAMS) {
            const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()

            if (!activeDrumLayer.isMuted()) {
                const page = activeDrumLayer.getActiveParameterPage()
                this.command === command.DEFAULT ? page.default() : page.random()
            }
        } else if (this.mode === mode.PAD_MIXER) {
            const page = this.drumRack.getActiveDrumPad().getActiveMixerPage()
            this.command === command.DEFAULT ? page.default() : page.random()
        } else if (this.mode === mode.RACK_MIXER) {
            const page = this.drumRack.getActiveMixerPage()
            this.command === command.DEFAULT ? page.default() : page.random()
        }

        this.command = null
        this.updateDisplay()
    }

    this.executeParamLevelCommand = function([, isPressed, encoderIndex]) {
        if (!isPressed || !this.command) {
            return
        }

        if (this.mode === mode.LAYER_PARAMS) {
            const page = this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
            const param = page.getParameter(encoderIndex)
            this.command === command.DEFAULT ? param.default() : param.random()

            if (page.categoryParameterIndex === encoderIndex) {
                page.getParameter(page.sampleParameterIndex).default()
            }
        } else if (this.mode === mode.PAD_MIXER) {
            const param = this.drumRack
                .getActiveDrumPad()
                .getActiveMixerPage()
                .getParameter(encoderIndex)
            this.command === command.DEFAULT ? param.default() : param.random()
        } else if (this.mode === mode.RACK_MIXER) {
            const param = this.drumRack.getActiveMixerPage().getParameter(encoderIndex)
            this.command === command.DEFAULT ? param.default() : param.random()
        }

        this.command = null
        this.updateDisplay()
    }

    this.sendValue = function([, value, encoderIndex]) {
        if (this.mode === mode.LAYER_PARAMS) {
            const page = this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()

            page.getParameter(encoderIndex).sendValue(value)

            if (page.getCategoryParameterIndex() === encoderIndex) {
                page.getSampleParameter().constrainAndSendValue()
            }
        } else if (this.mode === mode.PAD_MIXER) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveMixerPage()
                .getParameter(encoderIndex)
                .sendValue(value)
        } else if (this.mode === mode.RACK_MIXER) {
            this.drumRack
                .getActiveMixerPage()
                .getParameter(encoderIndex)
                .sendValue(value)
        }

        this.updateDisplay()
    }

    this.updateDisplay = function() {
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (!activeDrumPad) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, ['Blank'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else if (this.mode === mode.RACK_MIXER) {
            const drumRackMixerPage = this.drumRack.getActiveMixerPage()
            const mixerPageNames = this.drumRack.getMixerPages().map(page => page.getName())
            const activeMixerPageIndex = this.drumRack.getActiveMixerPage().getIndex()

            this.controlSurface.display.line(0, this.drumRack.getDrumPads().map(pad => pad.getName()))
            //todo: replace separate calls for parameters with method which checks mode
            this.controlSurface.display.line(1, drumRackMixerPage.getParameters().map(parameter => parameter.getDisplayValue()))
            this.controlSurface.display.title(2, [])
            this.controlSurface.display.menu(3, mixerPageNames, activeMixerPageIndex)
            this.controlSurface.trackSelect.map(mixerPageNames.length, activeMixerPageIndex)
            this.controlSurface.trackState.map([])
        } else if (this.mode === mode.RACK_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, ['FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else if (this.mode === mode.PAD_MIXER) {
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
        } else if (this.mode === mode.PAD_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumPad.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        } else if (this.mode === mode.LAYER_PARAMS) {
            const activeDrumLayer = activeDrumPad.getActiveDrumLayer()
            const activeParameterPage = activeDrumLayer.getActiveParameterPage()
            const parameterPageNames = activeDrumLayer.getParameterPages().map(page => page.getName())
            const activeParameterPageIndex = activeDrumLayer.getActiveParameterPage().getIndex()
            const parameterNames = activeParameterPage.getParameters().map(parameter => parameter.getName())
            const isLayerMuted = activeDrumLayer.getMuteParameter().getValue()

            if (isLayerMuted) {
                this.controlSurface.display.line(0, [' '])
                this.controlSurface.display.line(1, [' '])
                this.controlSurface.display.title(2, [activeDrumLayer.getName()])
                this.controlSurface.display.menu(3, ['Off'])
                this.controlSurface.trackSelect.map(0, 0)
                this.controlSurface.trackState.map([0])
            } else {
                this.controlSurface.display.line(0, parameterNames)
                this.controlSurface.display.line(1, activeParameterPage.getParameters().map(parameter => parameter.getDisplayValue()))
                this.controlSurface.display.title(2, [activeDrumLayer.getName()])
                this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex)
                this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex)
                this.controlSurface.trackState.map([1])
            }
        } else if (this.mode === mode.LAYER_FX) {
            const activeDrumLayer = activeDrumPad.getActiveDrumLayer()
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumLayer.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        }
    }
}
