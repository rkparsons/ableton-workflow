exports.DrumPad = function(name, drumLayers) {
    this.name = name
    this.activeDrumLayerIndex = 0
    this.drumLayers = drumLayers

    this.onValueChanged = function(callback) {
        for (i in this.drumLayers) {
            this.drumLayers[i].onValueChanged(callback)
        }
    }

    this.getActiveDrumLayer = function() {
        return this.drumLayers[this.activeDrumLayerIndex]
    }

    this.setActiveDrumLayer = function(drumLayerIndex) {
        this.activeDrumLayerIndex = drumLayerIndex
    }
}
