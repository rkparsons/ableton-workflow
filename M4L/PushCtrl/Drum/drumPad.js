exports.DrumPad = function(name, drumLayers, drumLayerNames) {
    this.name = name
    this.activeDrumLayerIndex = 0
    this.drumLayers = drumLayers
    this.drumLayerNames = drumLayerNames

    this.getName = function() {
        return this.name
    }

    this.onValueChanged = function(callback) {
        for (i in this.drumLayers) {
            this.drumLayers[i].onValueChanged(callback)
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
}
