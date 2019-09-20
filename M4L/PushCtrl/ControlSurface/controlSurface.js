const constants = require('constants')

exports.ControlSurface = function(onOffControlName) {
    this.isActive = false
    this.onOffControl = null
    this.controls = []
    this.controlSurfaceApi = undefined
    this.displayApi = []
    this.sceneLaunchButtonsApi = undefined
    this.controlNames = constants.pushControls
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')
    //todo: replace hardcoded control names with constants
    this.displayApi[0] = new LiveAPI(function() {}, getControlApi.call(this, 'Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, getControlApi.call(this, 'Display_Line_1'))
    this.displayApi[2] = new LiveAPI(function() {}, getControlApi.call(this, 'Display_Line_2'))
    this.displayApi[3] = new LiveAPI(function() {}, getControlApi.call(this, 'Display_Line_3'))

    getControls.call(this, onOffControlName)
    grabOnOffControl.call(this)
    releaseControls.call(this)

    this.display = function(lineIndex, values) {
        if (this.isActive) {
            this.displayApi[lineIndex].call('display_message', createDisplayMessage.call(this, values))
        }
    }

    this.toggleActive = function() {
        this.isActive ? releaseControls.call(this) : grabControls.call(this)
    }

    this.onEncoderTurned = function(callback) {
        observeControl.call(this, 'Track_Controls', callback)
    }

    this.onTapTempoButtonPressed = function(callback) {
        observeControl.call(this, 'Tap_Tempo_Button', callback)
    }

    this.onTrackSelectButtonPressed = function(callback) {
        observeControl.call(this, 'Track_Select_Buttons', callback)
    }

    this.onSceneLaunchButtonPressed = function(callback) {
        this.sceneLaunchButtonsApi = observeControl.call(this, 'Scene_Launch_Buttons', callback)
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

    function getControls(onOffControlName) {
        this.onOffControl = this.controlSurfaceApi.call('get_control_by_name', onOffControlName)

        for (var i in this.controlNames) {
            if (this.controlNames[i] !== onOffControlName) {
                this.controls.push(this.controlSurfaceApi.call('get_control_by_name', this.controlNames[i]))
            }
        }
    }

    function grabOnOffControl() {
        this.controlSurfaceApi.call('grab_control', this.onOffControl)
    }

    function grabControls() {
        this.isActive = true

        enableObservers.call(this)

        for (var i in this.controls) {
            this.controlSurfaceApi.call('grab_control', this.controls[i])
        }
    }

    function releaseControls() {
        this.isActive = false

        disableObservers.call(this)

        for (var i in this.controls) {
            this.controlSurfaceApi.call('release_control', this.controls[i])
        }
    }

    function enableObservers() {
        if (this.sceneLaunchButtonsApi) {
            this.sceneLaunchButtonsApi.property = 'value'
        }
    }

    function disableObservers() {
        if (this.sceneLaunchButtonsApi) {
            this.sceneLaunchButtonsApi.property = ''
        }
    }

    function createDisplayMessage(messageItems) {
        const paddingEnd = '        '
        var itemsPadded = []

        for (i in messageItems) {
            var length = 8 - (i % 2)

            itemsPadded.push((messageItems[i] + paddingEnd).slice(0, length))
        }

        return itemsPadded
    }
}
