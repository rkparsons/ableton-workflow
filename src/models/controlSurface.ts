import ControlName from '~/constants/controlName'
import { ControlSurfaceDisplay } from '~/models/controlSurfaceDisplay'
import { TrackSelect } from '~/models/trackSelect'
import { TrackState } from '~/models/trackState'

export class ControlSurface {
    isActive: boolean
    apis: Map<string, LiveAPI>
    onOffControlName: ControlName
    controlSurfaceApi: LiveAPI
    display: ControlSurfaceDisplay
    trackSelect: TrackSelect
    trackState: TrackState

    constructor(onOffControlName: ControlName) {
        this.isActive = false
        this.apis = new Map()
        this.onOffControlName = onOffControlName
        this.controlSurfaceApi = new LiveAPI(() => {}, 'control_surfaces 0')
        this.display = new ControlSurfaceDisplay(this.getControl.bind(this))
        this.trackSelect = new TrackSelect(this.getControl.bind(this))
        this.trackState = new TrackState(this.getControl.bind(this))
    }

    activate() {
        Object.values(ControlName).forEach(controlName => {
            this.controlSurfaceApi.call('grab_control', this.getControl(controlName))
        })

        this.isActive = true
    }

    deactivate() {
        this.isActive = false

        Object.values(ControlName).forEach(controlName => {
            if (controlName !== this.onOffControlName) {
                this.controlSurfaceApi.call('release_control', this.getControl(controlName))
            }
        })
    }

    onActive(controlName: ControlName, callback: (args: any[]) => void) {
        this.on(controlName, (args: any[]) => this.isActive && callback(args))
    }

    on(controlName: ControlName, callback: (args: any[]) => void) {
        const controlApi = new LiveAPI(callback, this.getControl(controlName))
        controlApi.property = 'value'

        this.apis.set(controlName, controlApi)
    }

    getControl(controlName: ControlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }
}
