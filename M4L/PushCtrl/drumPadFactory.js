include('drumPad')
const drumLayerFactory = require('drumLayerFactory')

exports.create = function(pathToDrumRack) {
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)

        if (drumPadApi.get('chains')[1]) {
            const pathToDrumLayers = pathToDrumPad + ' chains 0 devices 0'
            const drumLayersApi = new LiveAPI(null, pathToDrumLayers)
            const drumLayerCount = drumLayersApi.get('chains').length / 2
            const drumLayers = drumLayerFactory.create(pathToDrumLayers, drumLayerCount)

            drumPads[drumPadApi.id] = new DrumPad(drumPadApi.get('name'), drumLayers)
        }
    }

    return drumPads
}
