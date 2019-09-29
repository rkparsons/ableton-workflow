exports.DrumPad = function(name, drumLayers, drumLayerNames, mixerPages, mixerPageNames) {
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

    this.getActiveDrumLayer = function() {
        return drumLayers[activeDrumLayerIndex]
    }

    this.setActiveDrumLayer = function(drumLayerIndex) {
        activeDrumLayerIndex = drumLayerIndex
    }

    this.getDrumLayerNames = function() {
        return drumLayerNames
    }

    this.getActiveMixerPage = function() {
        return mixerPages[activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        activeMixerPageIndex = index
    }

    this.getMixerPageNames = function(index) {
        return mixerPageNames
    }
}
