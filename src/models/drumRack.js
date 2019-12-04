export class DrumRack {
    constructor(pathToDrumRack, drumPads, mixerPages) {
        this.pathToDrumRack = pathToDrumRack
        this.drumPads = drumPads
        this.mixerPages = mixerPages
        this.activeMixerPageIndex = 0
        this.activeDrumPadId = null
        this.selectedPadApi = null
    }

    onValueChanged(callback) {
        this.drumPads.forEach(pad => pad.getInstrumentRack().onValueChanged(callback))
        this.mixerPages.forEach(page => page.onValueChanged(callback))
    }

    onDrumPadSelected(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.pathToDrumRack + ' view')
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

    getMixerPages() {
        return this.mixerPages
    }

    getActiveMixerPage() {
        return this.mixerPages[this.activeMixerPageIndex]
    }

    setActiveMixerPage(index) {
        this.activeMixerPageIndex = index
    }
}
