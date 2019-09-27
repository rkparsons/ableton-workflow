exports.DrumRack = function(pathToDrumRack, drumPads, drumPadNames, mixerPages, mixerPageNames) {
    this.pathToDrumRack = pathToDrumRack
    this.drumPads = drumPads
    this.drumPadNames = drumPadNames
    this.mixerPages = mixerPages
    this.mixerPageNames = mixerPageNames
    this.activeMixerPageIndex = 0
    this.activeDrumPadId = null
    this.selectedPadApi = null

    this.onValueChanged = function(callback) {
        for (i in this.drumPads) {
            this.drumPads[i].onValueChanged(callback)
        }

        for (i in this.mixerPages) {
            this.mixerPages[i].onValueChanged(callback)
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

    this.getActiveMixerPage = function() {
        return this.mixerPages[this.activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        this.activeMixerPageIndex = index
    }

    this.getMixerPageNames = function() {
        return this.mixerPageNames
    }
}
