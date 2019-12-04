import { MixerMode } from './mixerMode'
import mode from '../constants/mode'

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

    updateDisplay() {
        super.updateDisplay()
        const chainOnStates = this.getRack()
            .getChains()
            .map(chain => !Boolean(chain.getMuteParameter().getValue()))

        const displayValues = this.getRack()
            .getActiveMixerPage()
            .getParameters()
            .map((parameter, index) => (chainOnStates[index] ? parameter.getDisplayValue() : ''))

        const chainNames = this.getRack()
            .getChains()
            .map(chain => chain.getName())

        this.controlSurface.display.line(0, chainNames)
        this.controlSurface.display.line(1, displayValues)
        this.controlSurface.trackState.map(chainOnStates)
    }
}
