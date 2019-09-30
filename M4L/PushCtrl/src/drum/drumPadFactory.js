import { DrumPad } from './drumPad'
import { createDrumLayers } from './drumLayerFactory'
import { createMixerPages } from '../parameter/parameterPageFactory'

export function createDrumPads(samplesFolder, pathToDrumRack) {
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)

        if (drumPadApi.get('chains')[1]) {
            const pathToDrumLayers = pathToDrumPad + ' chains 0 devices 0'
            const drumLayersApi = new LiveAPI(null, pathToDrumLayers)
            const drumPadName = drumPadApi.get('name')
            const drumLayerCount = drumLayersApi.get('chains').length / 2
            const drumLayers = createDrumLayers(samplesFolder, drumPadName, pathToDrumLayers, drumLayerCount)
            const mixerPages = createMixerPages(pathToDrumLayers, drumLayerCount)
            const drumPadId = parseInt(drumPadApi.id)

            drumPads.push(new DrumPad(drumPadId, drumPadName, drumLayers, mixerPages))
        }
    }

    return drumPads
}
