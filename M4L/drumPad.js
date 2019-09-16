function DrumPad(name) {
    this.name = name
    this.activeLayerIndex = 0
    this.drumLayers = []

    this.onValueChanged = function(callback) {
        for (layer in this.layers) {
            this.layers[i].onValueChanged(callback)
        }
    }

    this.activeLayer = function() {
        return this.layers[this.focussedLayerName]
    }

    this.focusLayer = function(layerIndex) {
        this.focussedLayerIndex = layerIndex
    }
}
