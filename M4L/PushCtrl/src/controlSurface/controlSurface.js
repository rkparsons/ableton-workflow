import { pushControls } from '../constants'
import { ControlSurfaceDisplay } from './controlSurfaceDisplay'
import { TrackSelect } from './trackSelect'
import { TrackState } from './trackState'

export function ControlSurface(onOffControlName) {
    this.apis = {}
    this.onOffControlName = onOffControlName
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')
    this.display = new ControlSurfaceDisplay(getControl.bind(this))
    this.trackSelect = new TrackSelect(getControl.bind(this))
    this.trackState = new TrackState(getControl.bind(this))

    this.activate = function() {
        for (var i in pushControls) {
            const control = this.controlSurfaceApi.call('get_control_by_name', [pushControls[i]])
            this.controlSurfaceApi.call('grab_control', control)
        }
    }

    this.deactivate = function() {
        for (var i in pushControls) {
            if (pushControls[i] !== this.onOffControlName) {
                const control = this.controlSurfaceApi.call('get_control_by_name', [pushControls[i]])
                this.controlSurfaceApi.call('release_control', control)
            }
        }
    }

    this.on = function(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'

        this.apis[controlName] = controlApi
    }

    function getControl(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }
}
