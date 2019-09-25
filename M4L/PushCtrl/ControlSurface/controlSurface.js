const constants = require('constants')
const { ControlSurfaceDisplay } = require('controlSurfaceDisplay')
const { TrackSelect } = require('trackSelect')

exports.ControlSurface = function(onOffControlName) {
    this.onOffControlName = onOffControlName
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')

    this.trackStateButtonApi = []

    //todo: replace hardcoded control names with constants
    this.display = new ControlSurfaceDisplay(getControl.bind(this))
    this.trackSelect = new TrackSelect(getControl.bind(this))

    this.trackStateButtonApi[0] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button0'))
    this.trackStateButtonApi[1] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button1'))
    this.trackStateButtonApi[2] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button2'))
    this.trackStateButtonApi[3] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button3'))
    this.trackStateButtonApi[4] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button4'))
    this.trackStateButtonApi[5] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button5'))
    this.trackStateButtonApi[6] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button6'))
    this.trackStateButtonApi[7] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button7'))

    this.activate = function() {
        for (var i in constants.pushControls) {
            const control = this.controlSurfaceApi.call('get_control_by_name', [constants.pushControls[i]])
            this.controlSurfaceApi.call('grab_control', control)
        }
    }

    this.deactivate = function() {
        for (var i in constants.pushControls) {
            if (constants.pushControls[i] !== this.onOffControlName) {
                const control = this.controlSurfaceApi.call('get_control_by_name', [constants.pushControls[i]])
                this.controlSurfaceApi.call('release_control', control)
            }
        }
    }

    this.trackState = function(itemsCount, activeItemIndex) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? constants.stateButtonColour.BLACK : i == activeItemIndex ? constants.stateButtonColour.BLUE_BRIGHT : constants.stateButtonColour.BLUE_DIM

            this.trackStateButtonApi[i].call('send_value', buttonValue)
        }
    }

    this.on = function(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'
    }

    function getControl(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }
}
