import { mode } from '../constants'

export function DrumTrack(drumRack, controlSurface, modes) {
    this.drumRack = drumRack
    this.controlSurface = controlSurface
    this.modes = modes
    this.activeMode = modes[0]
    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    this.getMode = function() {
        return this.activeMode
    }

    this.setMode = function(modeType, isPressed = true) {
        if (isPressed) {
            this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
            this.activeMode.updateDisplay()
        }
    }

    this.toggleActive = function(isPressed) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)

            if (this.activeMode.canHandle(mode.INACTIVE)) {
                this.setMode(mode.LAYER_PARAMS)
                this.controlSurface.activate()
            } else {
                this.setMode(mode.INACTIVE)
                this.controlSurface.deactivate()
            }
        }

        this.activeMode.updateDisplay()
    }
}
