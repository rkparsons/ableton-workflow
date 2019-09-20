const { DrumLayer } = require('drumLayer')
const { createParameterPages } = require('parameterPageFactory')

exports.createDrumLayers = function(samplesFolder, drumPadName, pathToDrumLayers, drumLayerCount) {
    var drumLayers = []

    for (var i = 0; i < drumLayerCount; i++) {
        const pathToDrumLayer = pathToDrumLayers + ' chains ' + i
        const drumLayerApi = new LiveAPI(null, pathToDrumLayer)
        const drumLayerName = drumLayerApi.get('name')
        const devicesCount = drumLayerApi.get('devices').length / 2
        const parameterPages = createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount)

        drumLayers[i] = new DrumLayer(drumLayerName, parameterPages)
    }

    return drumLayers
}
