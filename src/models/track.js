import mode from '../constants/mode'

export class Track {
    constructor(modes, trackIndex) {
        this.modes = modes
        this.activeMode = modes[0]
        this.liveSetViewApi = new LiveAPI(null, 'live_set view')
        this.trackId = parseInt(new LiveAPI(null, `live_set tracks ${trackIndex}`).id)
        this.isInitialised = false
    }

    initialise() {
        this.isInitialised = true
    }

    getMode() {
        return this.activeMode
    }

    setMode(modeType) {
        if (!this.isInitialised) {
            return
        }
        this.activeMode.ignore()
        this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
        this.activeMode.observe()
        this.activeMode.updateDisplay()
    }

    toggleActive() {
        if (!this.isInitialised) {
            return
        }

        this.liveSetViewApi.set('selected_track', 'id', this.trackId)

        if (this.activeMode.canHandle(mode.INACTIVE)) {
            this.activeMode.activateControlSurface()
            this.setMode(1)
        } else {
            this.activeMode.deactivateControlSurface()
            this.setMode(mode.INACTIVE)
        }
    }
}
