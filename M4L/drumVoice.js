const drumLayerFactory = require('drumLayer')

exports.create = function(voiceName) {
    return new Voice(voiceName)
}

function Voice(voiceName) {
    this.voiceName = voiceName
    this.focussedLayerIndex

    // get from voice config
    this.layerNames = []
    this.layers = []

    for (layerIndex in this.layerNames) {
        this.layers.push(drumLayerFactory.create(this.layerNames[layerIndex]))
    }

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
