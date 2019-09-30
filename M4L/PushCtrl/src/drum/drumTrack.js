import { mode, command } from '../constants'

//todo: run isActive check before, and updateDisplay after, every method call
export function DrumTrack(drumRack, controlSurface) {
    this.isActive = false
    this.mode = mode.LAYER_PARAMS
    this.command = null
    this.drumRack = drumRack
    this.controlSurface = controlSurface
    this.controlSurface.on('Tap_Tempo_Button', pushToggleActive.bind(this))
    this.controlSurface.on('Track_Controls', sendValue.bind(this))

    this.controlSurface.on('Tempo_Control', handleTempoControl.bind(this))
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

    this.appointedDeviceApi = new LiveAPI(setAppointedDeviceId.bind(this), 'live_set')
    this.appointedDeviceApi.property = 'appointed_device'
    this.appointedDeviceId = parseInt(this.appointedDeviceApi.get('appointed_device')[1])
    this.deviceId = parseInt(new LiveAPI(null, 'this_device').id)

    function setMode(mode, args) {
        if (args[1] === 127) {
            this.mode = mode
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

    function setAppointedDeviceId(args) {
        if (args[0] === 'appointed_device') {
            this.appointedDeviceId = parseInt(args[2])
        }
    }

    function pushToggleActive(args) {
        if (this.deviceId !== this.appointedDeviceId) {
            return
        }

        const isPressed = args[1] === 127

        if (isPressed) {
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else {
            updateDisplay.call(this)
        }
    }

    function focusDrumPad(args) {
        if (args[0] === 'selected_drum_pad') {
            this.drumRack.setActiveDrumPad(args[2])
            updateDisplay.call(this)
        }
    }

    function handleTempoControl(args) {
        if (!this.isActive) {
            return
        }

        const sampleParameter = getActiveParameterPage.call(this).getSampleParameter()

        if (sampleParameter && args[1] === 1) {
            sampleParameter.increment()
        } else if (sampleParameter && args[1] === 127) {
            sampleParameter.decrement()
        }

        updateDisplay.call(this)
    }

    function handleTrackSelectButtons(args) {
        if (!this.isActive) {
            return
        }

        if (this.mode === mode.RACK_MIXER && args[1] === 127) {
            this.drumRack.setActiveMixerPage(args[2])
            updateDisplay.call(this)
        } else if (this.mode === mode.LAYER_PARAMS && args[1] === 127) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .setActiveParameterPage(args[2])
            updateDisplay.call(this)
        } else if (this.mode === mode.PAD_MIXER && args[1] === 127) {
            this.drumRack.getActiveDrumPad().setActiveMixerPage(args[2])
            updateDisplay.call(this)
        }
    }

    function handleTrackStateButtons(args) {
        if (!this.isActive || args[1] !== 127) {
            return
        }

        if (this.mode === mode.LAYER_PARAMS || (this.mode === mode.LAYER_FX && args[1] === 127)) {
            this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2])
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
            const mixerPageNames = this.drumRack.getMixerPageNames()
            const activeMixerPageIndex = this.drumRack.getActiveMixerPageIndex()

            this.controlSurface.display.line(0, this.drumRack.getDrumPadNames())
            this.controlSurface.display.line(1, drumRackMixerPage.getParameterValues())
            this.controlSurface.display.title(2, [])
            this.controlSurface.display.menu(3, mixerPageNames, activeMixerPageIndex)
            this.controlSurface.trackSelect.map(mixerPageNames.length, activeMixerPageIndex)
            this.controlSurface.trackState.map(0, 0)
        } else if (this.mode === mode.RACK_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, ['FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map(0, 0)
        } else if (this.mode === mode.PAD_MIXER) {
            const drumPadMixerPage = activeDrumPad.getActiveMixerPage()
            const drumPadMixerPageNames = activeDrumPad.getMixerPages().map(page => page.getName())

            this.controlSurface.display.line(0, drumLayerNames)
            this.controlSurface.display.line(1, drumPadMixerPage.getParameterValues())
            this.controlSurface.display.title(2, [activeDrumPad.getName()])
            this.controlSurface.display.menu(3, drumPadMixerPageNames, drumPadMixerPage.getIndex())
            this.controlSurface.trackSelect.map(drumPadMixerPageNames.length, drumPadMixerPage.getIndex())
            this.controlSurface.trackState.map(0, 0)
        } else if (this.mode === mode.PAD_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumPad.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map(0, 0)
        } else if (this.mode === mode.LAYER_PARAMS) {
            const activeParameterPage = activeDrumLayer.getActiveParameterPage()
            const parameterPageNames = activeDrumLayer.getParameterPageNames()
            const activeParameterPageIndex = activeDrumLayer.getActiveParameterPageIndex()
            const parameterNames = activeParameterPage.getParameterNames()

            this.controlSurface.display.line(0, parameterNames)
            this.controlSurface.display.line(1, activeParameterPage.getParameterValues())
            this.controlSurface.display.title(2, [activeDrumPad.getName() + ' ' + activeDrumLayer.getName()])
            this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex)
            this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex)
            this.controlSurface.trackState.map(drumLayerNames.length, activeDrumLayer.getIndex())
        } else if (this.mode === mode.LAYER_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.title(2, [activeDrumPad.getName() + ' ' + activeDrumLayer.getName() + ' FX'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect.map(0, 0)
            this.controlSurface.trackState.map(drumLayerNames.length, activeDrumLayer.getIndex())
        }
    }

    function receiveValue(args) {
        if (this.isActive) {
            updateDisplay.call(this)
        }
    }
}