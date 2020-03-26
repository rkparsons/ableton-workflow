import { DrumPad } from '~/models/drumPad'
import { MixerPage } from '~/parameterPages/mixer/mixerPage'
import { Rack } from '~/models/rack'

export class DrumRack extends Rack {
    pathToRack: string
    drumPads: DrumPad[]
    activeDrumPadId?: number
    selectedPadApi?: LiveAPI

    constructor(pathToRack: string, drumPads: DrumPad[], mixerPages: MixerPage[]) {
        super(mixerPages)
        this.pathToRack = pathToRack
        this.drumPads = drumPads
    }

    onValueChanged(callback: () => void) {
        super.onValueChanged(callback)
        this.drumPads.forEach(pad => {
            pad.getMuteParameter().onValueChanged(callback)
            pad.getInstrumentRack().onValueChanged(callback)
        })
    }

    onDrumPadSelected(callback: LiveApiCallback) {
        this.selectedPadApi = new LiveAPI(callback, this.pathToRack + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    getChains() {
        return this.drumPads
    }

    getActiveInstrumentRack() {
        return this.getActiveDrumPad()?.getInstrumentRack()
    }

    getActiveDrumPad() {
        return this.drumPads.find(pad => pad.getId() === this.activeDrumPadId)
    }

    setActiveDrumPad(id: number) {
        this.activeDrumPadId = id
    }
}
