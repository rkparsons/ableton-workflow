import { DrumLayer } from './drumLayer'
import { createParameterPages } from '../parameter/parameterPageFactory'
import { createParameter } from '../parameter/parameterFactory'

export function createDrumLayers(samplesFolder, drumPadName, pathToDrumLayers, drumLayerCount) {
    var drumLayers = []

    for (var i = 0; i < drumLayerCount; i++) {
        const pathToDrumLayer = pathToDrumLayers + ' chains ' + i
        const drumLayerApi = new LiveAPI(null, pathToDrumLayer)
        const drumLayerName = drumLayerApi.get('name').toString()
        const devicesCount = drumLayerApi.get('devices').length / 2
        const parameterPages = createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount)
        const muteParameter = createParameter('Layer', 'Mute', pathToDrumLayer)

        drumLayers[i] = new DrumLayer(i, drumLayerName, parameterPages, muteParameter)
    }

    return drumLayers
}
