import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { InstrumentRack } from '~/models/instrumentRack'
import { MixerMode } from './mixerMode'
import Mode from '~/constants/mode'

export class InstrumentRackMixerMode extends MixerMode {
    constructor(rack: InstrumentRack, controlSurface: ControlSurface) {
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
            .forEach(chain => chain.getMuteParameter().observe())
    }

    ignore() {
        super.ignore()

        this.getRack()
            ?.getChains()
            .forEach(chain => chain.getMuteParameter().ignore())
    }

    handleTempoControl(encoderValue: number) {}
}
