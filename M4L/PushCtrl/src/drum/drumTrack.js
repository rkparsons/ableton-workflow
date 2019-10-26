import { mode } from '../constants'
import { log } from '../util'

export class DrumTrack {
    constructor(modes) {
        this.modes = modes
        this.activeMode = modes[0]
        this.liveSetViewApi = new LiveAPI(null, 'live_set view')
        this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)
        this.liveSetTempoApi = new LiveAPI(this.handleTempoChange, 'live_set master_track mixer_device song_tempo')
        this.liveSetTempoApi.property = 'value'
    }

    getMode() {
        return this.activeMode
    }

    setMode(modeType) {
        this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
        this.activeMode.updateDisplay()
    }

    handleTempoChange(args) {
        log('handleTempoChange', args)
        // if (property === 'value') {f
        //     this.activeMode.warpToProjectBpm(Number(bpm))
        //     this.activeMode.updateDisplay()
        // }
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
