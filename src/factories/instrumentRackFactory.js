import { InstrumentRack } from '../models/instrumentRack'
import { createDrumLayers } from './drumLayerFactory'
import { createMixerPages } from './parameterPageFactory'

export default function(samplesFolder, pathToInstrumentRack) {
    const instrumentRackApi = new LiveAPI(null, pathToInstrumentRack)
    const name = instrumentRackApi.get('name').toString()
    const chainCount = instrumentRackApi.get('chains').length / 2
    const chains = createDrumLayers(samplesFolder, name, pathToInstrumentRack, chainCount)
    const mixerPages = createMixerPages(pathToInstrumentRack, chainCount)

    return new InstrumentRack(name, chains, mixerPages)
}
