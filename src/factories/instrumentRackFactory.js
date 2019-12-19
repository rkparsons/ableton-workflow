import { InstrumentRack } from '../models/instrumentRack'
import { createDevice } from './deviceFactory'
import { createInstrumentChains } from './instrumentChainFactory'

export function createInstrumentRack(samplesFolder, pathToInstrumentRack) {
    const instrumentRackApi = new LiveAPI(null, pathToInstrumentRack)
    const name = instrumentRackApi.get('name').toString()
    const chainCount = instrumentRackApi.get('chains').length / 2
    const chains = createInstrumentChains(samplesFolder, name, pathToInstrumentRack, chainCount)
    const mixerPages = createDevice['Mixer'](pathToInstrumentRack, chainCount)

    return new InstrumentRack(name, chains, mixerPages)
}
