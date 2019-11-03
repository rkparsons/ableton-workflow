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
        const activeDrumPad = this.getActiveDrumPad()

        if (activeDrumPad) {
            activeDrumPad.observe()
            this.getActiveMixerPage().observe()
        }
    }

    this.ignore = function() {
        const activeDrumPad = this.getActiveDrumPad()

        if (activeDrumPad) {
            activeDrumPad.ignore()
            this.getActiveMixerPage().ignore()
        }
    }

    this.onDrumPadSelected = function(callback) {
        selectedPadApi = new LiveAPI(callback, pathToDrumRack + ' view')
        selectedPadApi.property = 'selected_drum_pad'
    }

    this.getDrumPads = function() {
        return drumPads
    }

    this.getActiveDrumPad = function() {
        return drumPads.find(drumPad => drumPad.getId() === activeDrumPadId) || this.blankDrumPad
    }

    this.setActiveDrumPad = function(value) {
        this.ignore()

        activeDrumPadId = value

        this.observe()
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
