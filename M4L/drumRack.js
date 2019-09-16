function DrumRack(pathToDrumRack, drumPads) {
    this.drumPads = drumPads
    this.activeDrumPadId = null
    this.pathToDrumRack = pathToDrumRack
    this.selectedPadApi = null

    this.onValueChanged = function(callback) {
        for (i in this.drumPads) {
            this.drumPads[i].onValueChanged(callback)
        }
    }

    this.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.pathToDrumRack + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    this.activeDrumPad = function() {
        return this.drumPads[this.activeDrumPadId]
    }

    this.focusDrumPad = function(drumPadId) {
        this.activeDrumPadId = drumPadId
    }
}
