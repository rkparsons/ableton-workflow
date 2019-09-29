import { DrumLayer } from './drumLayer'
import { createParameterPages } from '../parameter/parameterPageFactory'

export function createDrumLayers(samplesFolder, drumPadName, pathToDrumLayers, drumLayerCount) {
    var drumLayers = []
    var drumLayerNames = []

    for (var i = 0; i < drumLayerCount; i++) {
        const pathToDrumLayer = pathToDrumLayers + ' chains ' + i
        const drumLayerApi = new LiveAPI(null, pathToDrumLayer)
        const drumLayerName = drumLayerApi.get('name')
        const devicesCount = drumLayerApi.get('devices').length / 2
        const result = createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount)

        drumLayers[i] = new DrumLayer(i, drumLayerName, result.parameterPages, result.parameterPageNames)
        drumLayerNames[i] = drumLayerName
    }

    return { drumLayers: drumLayers, drumLayerNames: drumLayerNames }
}
