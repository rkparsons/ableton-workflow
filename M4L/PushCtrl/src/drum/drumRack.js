export function DrumRack(pathToDrumRack, drumPads, mixerPages) {
    var activeMixerPageIndex = 0
    var activeDrumPadId = null
    var selectedPadApi = null

    this.onValueChanged = function(callback) {
        for (i in drumPads) {
            drumPads[i].onValueChanged(callback)
        }

        for (i in mixerPages) {
            mixerPages[i].onValueChanged(callback)
        }
    }

    this.observe = function() {
        this.getActiveDrumPad().observe()
        this.getActiveMixerPage().observe()
    }

    this.ignore = function() {
        this.getActiveDrumPad().ignore()
        this.getActiveMixerPage().ignore()
    }

    this.onDrumPadSelected = function(callback) {
        selectedPadApi = new LiveAPI(callback, pathToDrumRack + ' view')
        selectedPadApi.property = 'selected_drum_pad'
    }

    this.getDrumPads = function() {
        return drumPads
    }

    this.getActiveDrumPad = function() {
        return drumPads.find(drumPad => drumPad.getId() === activeDrumPadId)
    }

    this.setActiveDrumPad = function(value) {
        activeDrumPadId && this.getActiveDrumPad().ignore()

        activeDrumPadId = value

        this.getActiveDrumPad().observe()
    }

    this.getMixerPages = function() {
        return mixerPages
    }

    this.getActiveMixerPage = function() {
        return mixerPages[activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        this.getActiveMixerPage().ignore()

        activeMixerPageIndex = index

        this.getActiveMixerPage().observe()
    }
}
