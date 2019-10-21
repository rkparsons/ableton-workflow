import { mode } from '../constants'
import { log } from '../util'

export function DrumTrack(modes) {
    this.modes = modes
    this.activeMode = modes[0]
    // this.tempoApi = new LiveAPI(args => log(args), 'live_set master_track mixer_device song_tempo')
    // this.tempoApi.property = 'value'
    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    this.getMode = function() {
        return this.activeMode
    }

    this.setMode = function(modeType) {
        this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
        this.activeMode.updateDisplay()
    }

    this.toggleActive = function() {
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
