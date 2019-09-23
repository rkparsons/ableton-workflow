exports.DrumRack = function(pathToDrumRack, drumPads, drumPadNames) {
    this.drumPads = drumPads
    this.drumPadNames = drumPadNames
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

    // todo: replace getters and setters with public properties
    this.getActiveDrumPad = function() {
        return this.drumPads[this.activeDrumPadId]
    }

    this.setActiveDrumPad = function(drumPadId) {
        this.activeDrumPadId = drumPadId
    }

    this.getDrumPadNames = function() {
        return this.drumPadNames
    }
}
