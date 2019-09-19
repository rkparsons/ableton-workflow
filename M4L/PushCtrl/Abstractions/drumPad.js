var DrumPad = (function() {
    function DrumPad(name, drumLayers) {
        this.name = name
        this.activeDrumLayerIndex = 0
        this.drumLayers = drumLayers
    }

    DrumPad.prototype.onValueChanged = function(callback) {
        for (i in this.drumLayers) {
            this.drumLayers[i].onValueChanged(callback)
        }
    }

    DrumPad.prototype.getActiveDrumLayer = function() {
        return this.drumLayers[this.activeDrumLayerIndex]
    }

    DrumPad.prototype.setActiveDrumLayer = function(drumLayerIndex) {
        this.activeDrumLayerIndex = drumLayerIndex
    }

    return DrumPad
})()
