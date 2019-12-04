import { UiMode } from './uiMode'
import mode from '../constants/mode'

export class InactiveMode extends UiMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INACTIVE
    }

    setLayer() {}

    updateDisplay() {
        this.controlSurface.deactivate()
    }
}
