export function DrumRack(pathToDrumRack, drumPads, drumPadNames, mixerPages, mixerPageNames) {
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

    this.onDrumPadSelected = function(callback) {
        selectedPadApi = new LiveAPI(callback, pathToDrumRack + ' view')
        selectedPadApi.property = 'selected_drum_pad'
    }

    this.getActiveDrumPad = function() {
        return drumPads[activeDrumPadId]
    }

    this.setActiveDrumPad = function(drumPadId) {
        activeDrumPadId = drumPadId
    }

    this.getDrumPadNames = function() {
        return drumPadNames
    }

    // replace
    this.getActiveMixerPageIndex = function() {
        return activeMixerPageIndex
    }

    this.getActiveMixerPage = function() {
        return mixerPages[activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        activeMixerPageIndex = index
    }

    this.getMixerPageNames = function() {
        return mixerPageNames
    }
}
