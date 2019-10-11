export function DrumPad(id, name, drumLayers, mixerPages) {
    var activeDrumLayerIndex = 0
    var activeMixerPageIndex = 0

    this.getId = function() {
        return id
    }

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
        return drumLayers[Math.round(activeDrumLayerIndex)]
    }

    this.setActiveDrumLayer = function(drumLayerIndex) {
        activeDrumLayerIndex = drumLayerIndex
    }

    this.incrementActiveDrumLayer = function(drumLayerIncrement) {
        activeDrumLayerIndex += drumLayerIncrement
        activeDrumLayerIndex = Math.max(0, activeDrumLayerIndex)
        activeDrumLayerIndex = Math.min(drumLayers.length - 1, activeDrumLayerIndex)
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
