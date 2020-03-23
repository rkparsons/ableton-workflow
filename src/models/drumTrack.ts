import Mode from '~/constants/mode'
import { Track } from '~/models/track'
import { UiMode } from '~/uiModes/uiMode'

export class DrumTrack extends Track {
    constructor(modes: UiMode[], trackIndex: number) {
        super(modes, trackIndex)
    }

    onVolMixModeButton() {
        this.setMode(Mode.DRUM_RACK_MIXER)
    }
    onPanSendModeButton() {
        this.setMode(Mode.DRUM_RACK_FX)
    }
}
