import { mode, command } from '../constants'
import { log } from '../util'

//todo: run isActive check before, and updateDisplay after, every method call
export function DrumTrack(drumRack, controlSurface) {
    this.isActive = false
    this.previousMode = mode.LAYER_PARAMS
    this.mode = mode.LAYER_PARAMS
    this.command = null
    this.drumRack = drumRack
    this.controlSurface = controlSurface

    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    this.setMode = function(targetMode, [, isPressed]) {
        if (isPressed) {
            this.previousMode = this.mode
            this.mode = targetMode
            this.updateDisplay()
        }
    }

    this.setCommand = function(command, [, isPressed]) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== null) {
            this.executePageLevelCommand()
        }
    }

    this.setLayer = function([, delta]) {
        const drumLayerIncrement = 0.1 * (delta < 50 ? delta : delta - 128)

        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer(drumLayerIncrement)
        this.updateDisplay()
    }

    this.pushToggleActive = function([, isPressed]) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else if (this.isActive) {
            this.updateDisplay()
        }
    }

    this.focusDrumPad = function([property, , drumPadId]) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.drumRack.setActiveDrumPad(drumPadId)

        if (this.isActive) {
            this.updateDisplay()
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
        // todo: replace with a unactive mode
        if (!this.isActive) {
            return
        }
        const activeDrumPad = this.drumRack.getActiveDrumPad()
        const activeDrumLayer = activeDrumPad ? activeDrumPad.getActiveDrumLayer() : null
        const drumLayerNames = activeDrumPad ? activeDrumPad.getDrumLayers().map(layer => layer.getName()) : null
        const isLayerMuted = activeDrumLayer.getMuteParameter().getValue()

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
            const activeParameterPage = activeDrumLayer.getActiveParameterPage()
            const parameterPageNames = activeDrumLayer.getParameterPages().map(page => page.getName())
            const activeParameterPageIndex = activeDrumLayer.getActiveParameterPage().getIndex()
            const parameterNames = activeParameterPage.getParameters().map(parameter => parameter.getName())

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
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumLayer.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        }
    }

    this.controlSurface.on('Tap_Tempo_Button', args => this.pushToggleActive(args))
    this.controlSurface.onActive('Track_Controls', args => this.sendValue(args))
    this.controlSurface.onActive('Tempo_Control', args => this.handleTempoControl(args))
    this.controlSurface.onActive('Swing_Control', args => this.setLayer(args))
    this.controlSurface.onActive('Track_Control_Touches', args => this.executeParamLevelCommand(args))
    this.controlSurface.onActive('Track_State_Buttons', args => this.handleTrackStateButtons(args))
    this.controlSurface.onActive('Track_Select_Buttons', args => this.handleTrackSelectButtons(args))
    this.controlSurface.onActive('Vol_Mix_Mode_Button', args => this.setMode(mode.RACK_MIXER, args))
    this.controlSurface.onActive('Pan_Send_Mode_Button', args => this.setMode(mode.RACK_FX, args))
    this.controlSurface.onActive('Single_Track_Mode_Button', args => this.setMode(mode.PAD_MIXER, args))
    this.controlSurface.onActive('Clip_Mode_Button', args => this.setMode(mode.PAD_FX, args))
    this.controlSurface.onActive('Device_Mode_Button', args => this.setMode(mode.LAYER_PARAMS, args))
    this.controlSurface.onActive('Browse_Mode_Button', args => this.setMode(mode.LAYER_FX, args))
    this.controlSurface.onActive('Master_Select_Button', args => this.setCommand(command.DEFAULT, args))
    this.controlSurface.onActive('Track_Stop_Button', args => this.setCommand(command.RANDOM, args))

    this.drumRack.onDrumPadSelected(args => this.focusDrumPad(args))
    this.drumRack.onValueChanged(args => this.updateDisplay(args))
}
