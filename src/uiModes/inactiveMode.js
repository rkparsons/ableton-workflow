import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class InactiveMode extends UiMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INACTIVE
    }

    updateDisplay() {
        this.controlSurface.deactivate()
    }
}
