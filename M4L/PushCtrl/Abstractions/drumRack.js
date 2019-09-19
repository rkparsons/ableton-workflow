var DrumRack = (function() {
    function DrumRack(pathToDrumRack, drumPads) {
        this.drumPads = drumPads
        this.activeDrumPadId = null
        this.pathToDrumRack = pathToDrumRack
        this.selectedPadApi = null
    }

    DrumRack.prototype.onValueChanged = function(callback) {
        for (i in this.drumPads) {
            this.drumPads[i].onValueChanged(callback)
        }
    }

    DrumRack.prototype.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.pathToDrumRack + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    DrumRack.prototype.getActiveDrumPad = function() {
        return this.drumPads[this.activeDrumPadId]
    }

    DrumRack.prototype.setActiveDrumPad = function(drumPadId) {
        this.activeDrumPadId = drumPadId
    }

    return DrumRack
})()
