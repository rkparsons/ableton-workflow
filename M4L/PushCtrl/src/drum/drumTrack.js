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

    this.controlSurface.on('Tap_Tempo_Button', pushToggleActive.bind(this))
    this.controlSurface.onActive('Track_Controls', sendValue.bind(this))
    this.controlSurface.onActive('Tempo_Control', handleTempoControl.bind(this))
    this.controlSurface.onActive('Swing_Control', setLayer.bind(this))
    this.controlSurface.onActive('Track_Control_Touches', executeParamLevelCommand.bind(this))
    this.controlSurface.onActive('Track_State_Buttons', handleTrackStateButtons.bind(this))
    this.controlSurface.onActive('Track_Select_Buttons', handleTrackSelectButtons.bind(this))
    this.controlSurface.onActive('Vol_Mix_Mode_Button', setMode.bind(this, mode.RACK_MIXER))
    this.controlSurface.onActive('Pan_Send_Mode_Button', setMode.bind(this, mode.RACK_FX))
    this.controlSurface.onActive('Single_Track_Mode_Button', setMode.bind(this, mode.PAD_MIXER))
    this.controlSurface.onActive('Clip_Mode_Button', setMode.bind(this, mode.PAD_FX))
    this.controlSurface.onActive('Device_Mode_Button', setMode.bind(this, mode.LAYER_PARAMS))
    this.controlSurface.onActive('Browse_Mode_Button', setMode.bind(this, mode.LAYER_FX))
    this.controlSurface.onActive('Master_Select_Button', setCommand.bind(this, command.DEFAULT))
    this.controlSurface.onActive('Track_Stop_Button', setCommand.bind(this, command.RANDOM))

    this.drumRack.onDrumPadSelected(focusDrumPad.bind(this))
    this.drumRack.onValueChanged(updateDisplay.bind(this))

    function setMode(targetMode, [, isPressed]) {
        if (isPressed) {
            this.previousMode = this.mode
            this.mode = targetMode
            updateDisplay.call(this)
        }
    }

    function setCommand(command, [, isPressed]) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== null) {
            executePageLevelCommand.call(this)
        }
    }

    function setLayer([, delta]) {
        const drumLayerIncrement = 0.1 * (delta < 50 ? delta : delta - 128)

        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer(drumLayerIncrement)
        updateDisplay.call(this)
    }

    function pushToggleActive([, isPressed]) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else if (this.isActive) {
            updateDisplay.call(this)
        }
    }

    function focusDrumPad([property, , drumPadId]) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.drumRack.setActiveDrumPad(drumPadId)

        if (this.isActive) {
            updateDisplay.call(this)
        }
    }

    function handleTempoControl([, encoderValue]) {
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

            updateDisplay.call(this)
        }
    }

    function handleTrackSelectButtons([, isPressed, buttonIndex]) {
        if (!isPressed) {
            return
        }

        if (this.mode === mode.RACK_MIXER) {
            this.drumRack.setActiveMixerPage(buttonIndex)
            updateDisplay.call(this)
        } else if (this.mode === mode.LAYER_PARAMS) {
            const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()
            const isMuted = activeDrumLayer.getMuteParameter().getValue() === 1

            if (!isMuted) {
                activeDrumLayer.setActiveParameterPage(buttonIndex)
                updateDisplay.call(this)
            }
        } else if (this.mode === mode.PAD_MIXER) {
            this.drumRack.getActiveDrumPad().setActiveMixerPage(buttonIndex)
            updateDisplay.call(this)
        }
    }

    function handleTrackStateButtons([, isPressed, buttonIndex]) {
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

        updateDisplay.call(this)
    }

    function executePageLevelCommand() {
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
        updateDisplay.call(this)
    }

    function executeParamLevelCommand([, isPressed, encoderIndex]) {
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
        updateDisplay.call(this)
    }

    function sendValue([, value, encoderIndex]) {
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

        updateDisplay.call(this)
    }

    function updateDisplay() {
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
}
