include('drumPad')
const drumLayerFactory = require('drumLayerFactory')

exports.create = function(pathToDrumPad, name) {
    const pathToDrumLayers = pathToDrumPad + ' chains 0 devices 0'
    const drumLayersApi = new LiveAPI(null, pathToDrumLayers)
    var drumLayerCount = drumLayersApi.get('chains').length / 2

    var drumLayers = []

    for (var i = 0; i < drumLayerCount; i++) {
        const drumLayerApi = new LiveAPI(null, pathToDrumLayers + ' chains ' + i)

        drumLayers[drumLayerApi.id] = drumLayerFactory.create(drumLayerApi.get('name'))
    }

    return new DrumPad(name, drumLayers)
}
