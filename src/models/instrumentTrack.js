import { Track } from '~/models/track'

export class InstrumentTrack extends Track {
    constructor(modes, trackIndex) {
        super(modes, trackIndex)
    }

    onVolMixModeButton() {}

    onPanSendModeButton() {}
}
