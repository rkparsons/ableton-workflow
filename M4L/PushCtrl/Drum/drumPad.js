exports.DrumPad = function(name, drumLayers, drumLayerNames, mixerPages, mixerPageNames) {
    //todo: remove unused params
    var activeDrumLayerIndex = 0
    var activeMixerPageIndex = 0

    this.getName = function() {
        return name
    }

    this.onValueChanged = function(callback) {
        for (i in drumLayers) {
            drumLayers[i].onValueChanged(callback)
        }

        for (i in mixerPages) {
            mixerPages[i].onValueChanged(callback)
        }
    }

    this.getDrumLayers = function() {
        return drumLayers
    }

    this.getActiveDrumLayer = function() {
        return drumLayers[activeDrumLayerIndex]
    }

    this.setActiveDrumLayer = function(drumLayerIndex) {
        activeDrumLayerIndex = drumLayerIndex
    }

    this.getMixerPages = function() {
        return mixerPages
    }

    this.getActiveMixerPage = function() {
        return mixerPages[activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        activeMixerPageIndex = index
    }
}
