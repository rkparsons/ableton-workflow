exports.DrumPad = function(name, drumLayers, drumLayerNames, mixerPages, mixerPageNames) {
    this.name = name
    this.activeDrumLayerIndex = 0
    this.drumLayers = drumLayers
    this.drumLayerNames = drumLayerNames
    this.mixerPages = mixerPages
    this.mixerPageNames = mixerPageNames
    this.activeMixerPageIndex = 0

    this.getName = function() {
        return this.name
    }

    this.onValueChanged = function(callback) {
        for (i in this.drumLayers) {
            this.drumLayers[i].onValueChanged(callback)
        }

        for (i in this.mixerPages) {
            this.mixerPages[i].onValueChanged(callback)
        }
    }

    this.getActiveDrumLayerIndex = function() {
        return this.activeDrumLayerIndex
    }

    this.getActiveDrumLayer = function() {
        return this.drumLayers[this.activeDrumLayerIndex]
    }

    this.setActiveDrumLayer = function(drumLayerIndex) {
        this.activeDrumLayerIndex = drumLayerIndex
    }

    this.getDrumLayerNames = function() {
        return this.drumLayerNames
    }

    this.getActiveMixerPage = function() {
        return this.mixerPages[this.activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        this.activeMixerPageIndex = index
    }
}
