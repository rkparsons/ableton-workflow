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
    this.controlSurface.on('Track_Controls', sendValue.bind(this))
    this.controlSurface.on('Tempo_Control', ifActive.call(this, handleTempoControl))
    this.controlSurface.on('Swing_Control', setLayer.bind(this))
    this.controlSurface.on('Track_Control_Touches', executeParamLevelCommand.bind(this))
    this.controlSurface.on('Track_State_Buttons', handleTrackStateButtons.bind(this))
    this.controlSurface.on('Track_Select_Buttons', handleTrackSelectButtons.bind(this))
    this.controlSurface.on('Vol_Mix_Mode_Button', setMode.bind(this, mode.RACK_MIXER))
    this.controlSurface.on('Pan_Send_Mode_Button', setMode.bind(this, mode.RACK_FX))
    this.controlSurface.on('Single_Track_Mode_Button', setMode.bind(this, mode.PAD_MIXER))
    this.controlSurface.on('Clip_Mode_Button', setMode.bind(this, mode.PAD_FX))
    this.controlSurface.on('Device_Mode_Button', setMode.bind(this, mode.LAYER_PARAMS))
    this.controlSurface.on('Browse_Mode_Button', setMode.bind(this, mode.LAYER_FX))
    this.controlSurface.on('Master_Select_Button', setCommand.bind(this, command.DEFAULT))
    this.controlSurface.on('Track_Stop_Button', setCommand.bind(this, command.RANDOM))

    this.drumRack.onDrumPadSelected(focusDrumPad.bind(this))
    this.drumRack.onValueChanged(receiveValue.bind(this))

    function ifActive(callback) {
        return args => this.isActive && callback.call(this, args)
    }

    function setMode(targetMode, args) {
        if (args[1] === 127) {
            this.previousMode = this.mode
            this.mode = targetMode
            updateDisplay.call(this)
        }
    }

    function setCommand(command, args) {
        if (args[1] === 127) {
            this.command = command
        } else if (this.command !== null) {
            executePageLevelCommand.call(this)
        }
    }

    function setLayer(args) {
        if (!this.isActive) {
            return
        }

        const delta = args[1]
        const drumLayerIncrement = 0.1 * (delta < 50 ? delta : delta - 128)

        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer(drumLayerIncrement)
        updateDisplay.call(this)
    }

    function pushToggleActive(args) {
        const isPressed = args[1] === 127

        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else {
            updateDisplay.call(this)
        }
    }

    function focusDrumPad(args) {
        if (args[0] === 'selected_drum_pad') {
            const drumPadId = args[2]
            this.drumRack.setActiveDrumPad(drumPadId)
            updateDisplay.call(this)
        }
    }

    function handleTempoControl(args) {
        //todo: move this search down to param level
        const sampleParameter = getActiveParameterPage.call(this).getSampleParameter()

        if (sampleParameter && args[1] === 1) {
            sampleParameter.increment()
        } else if (sampleParameter && args[1] === 127) {
            sampleParameter.decrement()
        }

        updateDisplay.call(this)
    }

    function handleTrackSelectButtons(args) {
        const isPressed = args[1] === 127
        const buttonIndex = parseInt(args[2])

        if (!this.isActive || !isPressed) {
            return
        }

        if (this.mode === mode.RACK_MIXER) {
            this.drumRack.setActiveMixerPage(buttonIndex)
            updateDisplay.call(this)
        } else if (this.mode === mode.LAYER_PARAMS) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .setActiveParameterPage(buttonIndex)
            updateDisplay.call(this)
        } else if (this.mode === mode.PAD_MIXER) {
            this.drumRack.getActiveDrumPad().setActiveMixerPage(buttonIndex)
            updateDisplay.call(this)
        }
    }

    function handleTrackStateButtons(args) {
        const isPressed = args[1] === 127
        const buttonIndex = parseInt(args[2])

        if (!this.isActive || !isPressed) {
            return
        }

        if (this.mode === mode.PAD_MIXER) {
            const muteParameter = this.drumRack
                .getActiveDrumPad()
                .getDrumLayers()
                [buttonIndex].getMuteParameter()

            const newMuteValue = muteParameter.getValue() === 0 ? 1 : 0
            muteParameter.setValue(newMuteValue)
            updateDisplay.call(this)
        }
    }

    function getActiveParameterPage() {
        if (this.mode === mode.LAYER_PARAMS) {
            return this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
        } else if (this.mode === mode.PAD_MIXER) {
            return this.drumRack.getActiveDrumPad().getActiveMixerPage()
        } else if (this.mode === mode.RACK_MIXER) {
            return this.drumRack.getActiveMixerPage()
        }
    }

    function executePageLevelCommand() {
        if (this.command === command.DEFAULT) {
            getActiveParameterPage.call(this).default()
        } else if (this.command === command.RANDOM) {
            getActiveParameterPage.call(this).random()
        }
        updateDisplay.call(this)
        this.command = null
    }

    function executeParamLevelCommand(args) {
        if (!this.isActive || args[1] === 0) {
            return
        }

        const encoderIndex = parseInt(args[2])
        const parameterPage = getActiveParameterPage.call(this)
        const activeParameter = parameterPage.getParameter(encoderIndex)

        if (this.command === command.DEFAULT) {
            activeParameter.default()
        } else if (this.command === command.RANDOM) {
            activeParameter.random()

            if (parameterPage.categoryParameterIndex === encoderIndex) {
                parameterPage.getParameter(parameterPage.sampleParameterIndex).default()
            }
        }

        updateDisplay.call(this)
        this.command = null
    }

    function sendValue(args) {
        if (!this.isActive || args[1] === 'id') {
            return
        }

        const value = args[1]
        const encoderIndex = parseInt(args[2])
        const parameterPage = getActiveParameterPage.call(this)

        if (parameterPage.categoryParameterIndex === encoderIndex) {
            parameterPage.getParameter(parameterPage.sampleParameterIndex).default()
        }

        parameterPage.getParameter(encoderIndex).sendValue(value)
        updateDisplay.call(this)
    }

    function updateDisplay() {
        if (!this.isActive) {
            return
        }

        const activeDrumPad = this.drumRack.getActiveDrumPad()
        const activeDrumLayer = activeDrumPad.getActiveDrumLayer()
        const drumLayerNames = activeDrumPad.getDrumLayers().map(layer => layer.getName())

        if (this.mode === mode.RACK_MIXER) {
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
            const isLayerMuted = activeDrumLayer.getMuteParameter().getValue()

            this.controlSurface.display.line(0, isLayerMuted ? [' '] : parameterNames)
            this.controlSurface.display.line(1, isLayerMuted ? [' '] : activeParameterPage.getParameters().map(parameter => parameter.getDisplayValue()))
            this.controlSurface.display.title(2, [activeDrumLayer.getName()])
            this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex)
            this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex)
            this.controlSurface.trackState.map([])
        } else if (this.mode === mode.LAYER_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumLayer.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map([])
        }
    }

    function receiveValue(args) {
        if (this.isActive) {
            updateDisplay.call(this)
        }
    }
}
