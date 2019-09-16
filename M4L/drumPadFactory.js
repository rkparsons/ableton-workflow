include('drumPad')
const drumLayerFactory = require('drumLayerFactory')

exports.create = function(pathToDrumPad, name) {
    const maxDrumLayers = 8
    var drumLayers = []

    for (var i = 0; i < maxDrumLayers; i++) {
        const drumLayerApi = new LiveAPI(null, pathToDrumPad + ' chains 0 devices 0 chains ' + i)

        if (drumLayerApi.id > 0) {
            drumLayers[drumLayerApi.id] = drumLayerFactory.create(drumLayerApi.get('name'))
        }
    }

    return new DrumPad(name, drumLayers)
}
