import { Track } from '~/models/track'
import { UiMode } from '~/uiModes/uiMode'

export class InstrumentTrack extends Track {
    constructor(modes: UiMode[], trackIndex: number) {
        super(modes, trackIndex)
    }

    onVolMixModeButton() {}

    onPanSendModeButton() {}
}
