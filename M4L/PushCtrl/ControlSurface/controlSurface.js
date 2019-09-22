const constants = require('constants')
const { deferLow } = require('util')

exports.ControlSurface = function(onOffControlName) {
    this.isActive = false
    this.onOffControl = null
    this.controls = []
    this.controlSurfaceApi = undefined
    this.displayApi = []
    this.trackSelectButtonApi = []
    this.sceneLaunchButtonsApi = undefined
    this.controlNames = constants.pushControls
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')
    //todo: replace hardcoded control names with constants
    this.displayApi[0] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_1'))
    this.displayApi[3] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_3'))
    this.trackSelectButtonApi[0] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button0'))
    this.trackSelectButtonApi[1] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button1'))
    this.trackSelectButtonApi[2] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button2'))
    this.trackSelectButtonApi[3] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button3'))
    this.trackSelectButtonApi[4] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button4'))
    this.trackSelectButtonApi[5] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button5'))
    this.trackSelectButtonApi[6] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button6'))
    this.trackSelectButtonApi[7] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button7'))

    getControls.call(this, onOffControlName)
    grabOnOffControl.call(this)
    releaseControls.call(this)

    this.display = function(lineIndex, values) {
        if (this.isActive) {
            this.displayApi[lineIndex].call('display_message', createDisplayMessage.call(this, values))
        }
    }

    this.setTrackSelectButtons = function(itemsCount, activeItemIndex) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? constants.selectButtonColour.BLACK : i == activeItemIndex ? constants.selectButtonColour.GREEN_BRIGHT : constants.selectButtonColour.GREEN_DIM

            this.trackSelectButtonApi[i].call('send_value', buttonValue)
        }
    }

    this.toggleActive = function() {
        this.isActive ? releaseControls.call(this) : grabControls.call(this)
    }

    this.getIsActive = function() {
        return this.isActive
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

    function getControl(controlName) {
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
        var itemsPadded = ''

        for (i in messageItems) {
            itemsPadded += (messageItems[i] + paddingEnd).slice(0, 8)
            itemsPadded += i % 2 === 0 ? ' ' : ''
        }

        return itemsPadded
    }
}
