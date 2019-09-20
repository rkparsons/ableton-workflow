const { defclass } = require('util')

exports.DrumRack = defclass(Object, function() {
    this.constructor = function(pathToDrumRack, drumPads) {
        this.drumPads = drumPads
        this.activeDrumPadId = null
        this.pathToDrumRack = pathToDrumRack
        this.selectedPadApi = null
    }

    this.onValueChanged = function(callback) {
        for (i in this.drumPads) {
            this.drumPads[i].onValueChanged(callback)
        }
    }

    this.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.pathToDrumRack + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    this.getActiveDrumPad = function() {
        return this.drumPads[this.activeDrumPadId]
    }

    this.setActiveDrumPad = function(drumPadId) {
        this.activeDrumPadId = drumPadId
    }
})
