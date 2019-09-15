const controlNames = require('controlSurfaceConfig')

exports.create = function() {
    return new ControlSurface()
}

function ControlSurface() {
    this.isActive = false
    this.controls = []
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')
    this.displayApi = []
    this.sceneLaunchButtonsApi = undefined
    this.displayApi[0] = new LiveAPI(function() {}, getControlApi('Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, getControlApi('Display_Line_1'))
    this.displayApi[2] = new LiveAPI(function() {}, getControlApi('Display_Line_2'))
    this.displayApi[3] = new LiveAPI(function() {}, getControlApi('Display_Line_3'))

    getControls()
    releaseControls()

    this.displayValues = function(values) {
        this.displayApi[1].call('display_message', createDisplayMessage(values))
    }

    this.toggleActive = function() {
        this.isActive ? releaseControls() : grabControls()
    }

    this.onEncoderTurned = function(callback) {
        this.observeControl('Track_Controls', callback)
    }

    this.onTapTempoButtonPressed = function(callback) {
        this.observeControl('Tap_Tempo_Button', callback)
    }

    this.onSceneLaunchButtonPressed = function(callback) {
        this.sceneLaunchButtonsApi = observeControl('Scene_Launch_Buttons', callback)
    }

    function observeControl(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'

        return controlApi
    }

    function getControlApi(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }

    function getControls() {
        for (var i in controlNames) {
            this.controls.push(this.controlSurfaceApi.call('get_control_by_name', controlNames[i]))
        }
    }

    function grabControls() {
        this.isActive = true

        enableObservers()

        for (var i in this.controls) {
            this.controlSurfaceApi.call('grab_control', this.controls[i])
        }
    }

    function releaseControls() {
        this.isActive = false

        disableObservers()

        for (var i in this.controls) {
            this.controlSurfaceApi.call('release_control', this.controls[i])
        }
    }

    function enableObservers() {
        this.sceneLaunchButtonsApi.property = 'value'
    }

    function disableObservers() {
        this.sceneLaunchButtonsApi.property = ''
    }

    function createDisplayMessage(values) {
        var padding = '        '
        var itemsPadded = []

        for (i in values) {
            var length = 8 - (i % 2)

            itemsPadded.push(('  ' + values[i] + padding).slice(0, length))
        }

        return itemsPadded
    }
}
