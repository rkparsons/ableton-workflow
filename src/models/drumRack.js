import { Rack } from './rack'

export class DrumRack extends Rack {
    constructor(pathToRack, drumPads, mixerPages) {
        super(mixerPages)
        this.pathToRack = pathToRack
        this.drumPads = drumPads
        this.activeDrumPadId = null
        this.selectedPadApi = null
    }

    onValueChanged(callback) {
        super.onValueChanged(callback)
        this.drumPads.forEach(pad => pad.getInstrumentRack().onValueChanged(callback))
    }

    onDrumPadSelected(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.pathToRack + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    getDrumPads() {
        return this.drumPads
    }

    getActiveInstrumentRack() {
        const drumPad = this.drumPads.find(pad => pad.getId() === this.activeDrumPadId)
        return drumPad ? drumPad.getInstrumentRack() : null
    }

    setActiveDrumPad(value) {
        this.activeDrumPadId = value
    }
}
