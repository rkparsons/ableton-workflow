function ControlSurface(onOffControlName) {
    this.isActive = false
    this.onOffControl = null
    this.controls = []
    this.controlSurfaceApi = undefined
    this.displayApi = []
    this.sceneLaunchButtonsApi = undefined
    this.controlNames = constants.pushControls
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')

    this.display = function(lineIndex, values) {
        if (this.isActive) {
            this.displayApi[lineIndex].call('display_message', this._createDisplayMessage(values))
        }
    }

    this.toggleActive = function() {
        this.isActive ? this._releaseControls() : this._grabControls()
    }

    this.onEncoderTurned = function(callback) {
        this._observeControl('Track_Controls', callback)
    }

    this.onTapTempoButtonPressed = function(callback) {
        this._observeControl('Tap_Tempo_Button', callback)
    }

    this.onSceneLaunchButtonPressed = function(callback) {
        this.sceneLaunchButtonsApi = this._observeControl('Scene_Launch_Buttons', callback)
    }

    this._observeControl = function(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'

        return controlApi
    }

    this._getControlApi = function(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }

    this._getControls = function(onOffControlName) {
        this.onOffControl = this.controlSurfaceApi.call('get_control_by_name', onOffControlName)

        for (var i in this.controlNames) {
            if (this.controlNames[i] !== onOffControlName) {
                this.controls.push(this.controlSurfaceApi.call('get_control_by_name', this.controlNames[i]))
            }
        }
    }

    this._grabOnOffControl = function() {
        this.controlSurfaceApi.call('grab_control', this.onOffControl)
    }

    this._grabControls = function() {
        this.isActive = true

        this._enableObservers()

        for (var i in this.controls) {
            this.controlSurfaceApi.call('grab_control', this.controls[i])
        }
    }

    this._releaseControls = function() {
        this.isActive = false

        this._disableObservers()

        for (var i in this.controls) {
            this.controlSurfaceApi.call('release_control', this.controls[i])
        }
    }

    this._enableObservers = function() {
        if (this.sceneLaunchButtonsApi) {
            this.sceneLaunchButtonsApi.property = 'value'
        }
    }

    this._disableObservers = function() {
        if (this.sceneLaunchButtonsApi) {
            this.sceneLaunchButtonsApi.property = ''
        }
    }

    this._createDisplayMessage = function(messageItems) {
        const paddingEnd = '        '
        var itemsPadded = []

        for (i in messageItems) {
            var length = 8 - (i % 2)

            itemsPadded.push((messageItems[i] + paddingEnd).slice(0, length))
        }

        return itemsPadded
    }

    this.displayApi[0] = new LiveAPI(function() {}, this._getControlApi('Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, this._getControlApi('Display_Line_1'))
    this.displayApi[2] = new LiveAPI(function() {}, this._getControlApi('Display_Line_2'))
    this.displayApi[3] = new LiveAPI(function() {}, this._getControlApi('Display_Line_3'))

    this._getControls(onOffControlName)
    this._grabOnOffControl()
    this._releaseControls()
}
