const constants = require('constants')
const { ControlSurfaceDisplay } = require('controlSurfaceDisplay')
const { TrackSelect } = require('trackSelect')
const { TrackState } = require('trackState')

exports.ControlSurface = function(onOffControlName) {
    this.onOffControlName = onOffControlName
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')
    this.display = new ControlSurfaceDisplay(getControl.bind(this))
    this.trackSelect = new TrackSelect(getControl.bind(this))
    this.trackState = new TrackState(getControl.bind(this))

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

    this.on = function(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'
    }

    function getControl(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }
}
