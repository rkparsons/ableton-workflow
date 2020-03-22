import { MixerMode } from './mixerMode'
import mode from '~/constants/mode'

export class InstrumentRackMixerMode extends MixerMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.INSTRUMENT_RACK_MIXER
    }

    getTitle() {
        return this.getRack().getName()
    }

    getRack() {
        return this.rack.getActiveInstrumentRack()
    }

    observe() {
        super.observe()

        this.getRack()
            .getChains()
            .forEach(chain => chain.getMuteParameter().observe())
    }

    ignore() {
        super.ignore()

        this.getRack()
            .getChains()
            .forEach(chain => chain.getMuteParameter().ignore())
    }
}
