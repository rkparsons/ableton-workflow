const controlNames = require('controlSurfaceConfig').controlNames

exports.create = function() {
    return new ControlSurface()
}

function ControlSurface() {
    this.isActive = false
    this.controls = []
    this.controlSurfaceApi = undefined
    this.displayApi = []
    this.sceneLaunchButtonsApi = undefined

    this.initialise = function() {
        this.controlSurfaceApi = new LiveAPI('control_surfaces 0')

        this.displayApi[0] = new LiveAPI(function() {}, this._getControlApi('Display_Line_0'))
        this.displayApi[1] = new LiveAPI(function() {}, this._getControlApi('Display_Line_1'))
        this.displayApi[2] = new LiveAPI(function() {}, this._getControlApi('Display_Line_2'))
        this.displayApi[3] = new LiveAPI(function() {}, this._getControlApi('Display_Line_3'))

        this._getControls()
        this._releaseControls()
    }

    this.displayValues = function(values) {
        if (this.isActive) {
            this.displayApi[1].call('display_message', this._createDisplayMessage(values))
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

    this._getControls = function() {
        for (var i in controlNames) {
            this.controls.push(this.controlSurfaceApi.call('get_control_by_name', controlNames[i]))
        }
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

    this._createDisplayMessage = function(values) {
        var padding = '        '
        var itemsPadded = []

        for (i in values) {
            var length = 8 - (i % 2)

            itemsPadded.push(('  ' + values[i] + padding).slice(0, length))
        }

        return itemsPadded
    }
}
