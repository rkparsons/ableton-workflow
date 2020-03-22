import { Track } from '~/models/track'
import mode from '~/constants/mode'

export class DrumTrack extends Track {
    constructor(modes, trackIndex) {
        super(modes, trackIndex)
    }

    onVolMixModeButton() {
        this.setMode(mode.DRUM_RACK_MIXER)
    }
    onPanSendModeButton() {
        this.setMode(mode.DRUM_RACK_FX)
    }
}
