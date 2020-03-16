/* eslint-disable */

import { ControlSurfaceDisplay } from './controlSurfaceDisplay'
import { TrackSelect } from './trackSelect'
import { TrackState } from './trackState'
import pushControls from '../constants/pushControls'

export function ControlSurface(onOffControlName) {
    this.isActive = false
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

        this.isActive = true
    }

    this.deactivate = function() {
        this.isActive = false

        for (var i in pushControls) {
            if (pushControls[i] !== this.onOffControlName) {
                const control = this.controlSurfaceApi.call('get_control_by_name', [pushControls[i]])
                this.controlSurfaceApi.call('release_control', control)
            }
        }
    }

    this.onActive = function(controlName, callback) {
        this.on(controlName, args => this.isActive && callback(args))
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
