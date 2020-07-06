import { ControlSurface } from '~/models/controlSurface'
import { MixerMode } from './mixerMode'
import Mode from '~/constants/mode'
import { Rack } from '~/models/rack'

export class InstrumentRackMixerMode extends MixerMode {
    constructor(rack: Rack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType: Mode) {
        return modeType === Mode.INSTRUMENT_RACK_MIXER
    }

    getTitle() {
        return this.getRack()?.getName() || ''
    }

    getRack() {
        return this.rack.getActiveInstrumentRack()
    }

    observe() {
        super.observe()

        this.getRack()
            ?.getChains()
            .forEach((chain) => chain.getMuteParameter().observe())
    }

    ignore() {
        super.ignore()

        this.getRack()
            ?.getChains()
            .forEach((chain) => chain.getMuteParameter().ignore())
    }

    handleTempoControl(encoderValue: number) {}
}
