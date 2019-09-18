exports.create = function(pathToDrumLayers, drumLayerCount) {
    include('drumLayer')
    const parameterPageFactory = require('parameterPageFactory')
    var drumLayers = []

    for (var i = 0; i < drumLayerCount; i++) {
        const pathToDrumLayer = pathToDrumLayers + ' chains ' + i
        const drumLayerApi = new LiveAPI(null, pathToDrumLayer)
        const devicesCount = drumLayerApi.get('devices').length / 2
        const parameterPages = parameterPageFactory.create(pathToDrumLayer, devicesCount)

        drumLayers[i] = new DrumLayer(drumLayerApi.get('name'), parameterPages)
    }

    return drumLayers
}
