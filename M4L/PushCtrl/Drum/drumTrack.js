const MODE = require('constants').mode

exports.DrumTrack = function(drumRack, controlSurface) {
    this.isActive = false
    this.mode = MODE.LAYER_PARAMS
    this.drumRack = drumRack
    this.controlSurface = controlSurface
    this.controlSurface.on('Tap_Tempo_Button', pushToggleActive.bind(this))
    this.controlSurface.on('Track_Controls', sendValue.bind(this))

    this.controlSurface.on('Track_State_Buttons', handleTrackStateButtons.bind(this))
    this.controlSurface.on('Track_Select_Buttons', handleTrackSelectButtons.bind(this))

    this.controlSurface.on('Vol_Mix_Mode_Button', setMode.bind(this, MODE.RACK_MIXER))
    this.controlSurface.on('Pan_Send_Mode_Button', setMode.bind(this, MODE.RACK_FX))
    this.controlSurface.on('Single_Track_Mode_Button', setMode.bind(this, MODE.PAD_MIXER))
    this.controlSurface.on('Clip_Mode_Button', setMode.bind(this, MODE.PAD_FX))
    this.controlSurface.on('Device_Mode_Button', setMode.bind(this, MODE.LAYER_PARAMS))
    this.controlSurface.on('Browse_Mode_Button', setMode.bind(this, MODE.LAYER_FX))

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

    function setAppointedDeviceId(args) {
        if (args[0] === 'appointed_device') {
            this.appointedDeviceId = parseInt(args[2])
        }
    }

    function isInFocus() {
        return this.deviceId === this.appointedDeviceId
    }

    function pushToggleActive(args) {
        if (!isInFocus.call(this)) {
            return
        }

        if (args[1] === 127) {
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

    function handleTrackSelectButtons(args) {
        if (!this.isActive || args[1] !== 127) {
            return
        }

        if (this.mode === MODE.LAYER_PARAMS) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .setActiveParameterPage(args[2])
            updateDisplay.call(this)
        } else if (this.mode === MODE.PAD_MIXER) {
            this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2])
            this.mode = MODE.LAYER_PARAMS
            updateDisplay.call(this)
        }
    }

    function handleTrackStateButtons(args) {
        if (!this.isActive || args[1] !== 127) {
            return
        }
    }

    function sendValue(args) {
        // why this check for < 0?
        if (!this.isActive || args[3] < 0) {
            return
        }

        if (this.mode === MODE.LAYER_PARAMS) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
                .getParameter(args[2])
                .sendValue(args[1])
        }

        updateDisplay.call(this)
    }

    function updateDisplay() {
        if (!this.isActive) {
            return
        }

        const activeDrumPad = this.drumRack.getActiveDrumPad()
        const activeDrumLayer = activeDrumPad.getActiveDrumLayer()
        const activeParameterPage = activeDrumLayer.getActiveParameterPage()
        const parameterPageNames = activeDrumLayer.getParameterPageNames()
        const activeParameterPageIndex = activeDrumLayer.getActiveParameterPageIndex()
        const parameterNames = activeParameterPage.getParameterNames()

        if (this.mode === MODE.RACK_MIXER) {
            this.controlSurface.display.line(0, this.drumRack.getDrumPadNames())
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.line(2, [' '])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect(0, 0)
            this.controlSurface.trackState(0, 0)
        } else if (this.mode === MODE.RACK_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.line(2, ['  [FX]'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect(0, 0)
            this.controlSurface.trackState(0, 0)
        } else if (this.mode === MODE.PAD_MIXER) {
            this.controlSurface.display.line(0, activeDrumPad.getDrumLayerNames())
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.line(2, ['  [' + activeDrumPad.getName() + ']'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect(activeDrumPad.getDrumLayerNames().length, activeDrumPad.getActiveDrumLayerIndex())
            this.controlSurface.trackState(0, 0)
        } else if (this.mode === MODE.PAD_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.line(2, ['  [' + activeDrumPad.getName() + ']', '[FX]'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect(0, 0)
            this.controlSurface.trackState(0, 0)
        } else if (this.mode === MODE.LAYER_PARAMS) {
            this.controlSurface.display.line(0, parameterNames)
            this.controlSurface.display.line(1, activeParameterPage.getParameterValues())
            this.controlSurface.display.line(2, ['  [' + activeDrumPad.getName() + ']', '[' + activeDrumLayer.getName() + ']'])
            this.controlSurface.display.line(3, parameterPageNames)
            this.controlSurface.trackSelect(parameterPageNames.length, activeParameterPageIndex)
            this.controlSurface.trackState(0, 0)
        } else if (this.mode === MODE.LAYER_FX) {
            this.controlSurface.display.line(0, [' '])
            this.controlSurface.display.line(1, [' '])
            this.controlSurface.display.line(2, ['  [' + activeDrumPad.getName() + ']', '[' + activeDrumLayer.getName() + ']', '[FX]'])
            this.controlSurface.display.line(3, [' '])
            this.controlSurface.trackSelect(0, 0)
            this.controlSurface.trackState(0, 0)
        }
    }

    function receiveValue(args) {
        if (this.isActive) {
            updateDisplay.call(this)
        }
    }
}
