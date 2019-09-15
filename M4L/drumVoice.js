const drumLayerFactory = require('drumLayer')

exports.create = function(voiceName, callback) {
    return new Voice(voiceName, callback)
}

function Voice(voiceName, callback) {
    this.voiceName = voiceName
    this.focussedLayerIndex

    // get from voice config
    this.layerNames = []
    this.layers = []

    for (layerIndex in this.layerNames) {
        this.layers.push(drumLayerFactory.create(this.layerNames[layerIndex], callback))
    }

    this.activeLayer = function() {
        return this.layers[this.focussedLayerName]
    }

    this.focusLayer = function(layerIndex) {
        this.focussedLayerIndex = layerIndex
    }
}
