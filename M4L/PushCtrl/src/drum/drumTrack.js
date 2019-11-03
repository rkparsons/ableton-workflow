import { mode } from '../constants'

export class DrumTrack {
    constructor(modes) {
        this.modes = modes
        this.activeMode = modes[0]
        this.liveSetViewApi = new LiveAPI(null, 'live_set view')
        this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)
    }

    getMode() {
        return this.activeMode
    }

    setMode(modeType) {
        this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
        this.activeMode.updateDisplay()
    }

    toggleActive() {
        this.liveSetViewApi.set('selected_track', 'id', this.trackId)

        if (this.activeMode.canHandle(mode.INACTIVE)) {
            this.setMode(mode.LAYER_PARAMS)
            this.activeMode.activate()
        } else {
            this.setMode(mode.INACTIVE)
            this.activeMode.deactivate()
        }
    }
}
