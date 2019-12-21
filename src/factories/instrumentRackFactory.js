import { InstrumentRack } from '../models/instrumentRack'
import { createInstrumentChains } from './instrumentChainFactory'
import { createParameterPages } from './parameterPageFactory'

export function createInstrumentRack(rackType, samplesFolder, pathToInstrumentRack) {
    const instrumentRackApi = new LiveAPI(null, pathToInstrumentRack)
    const name = instrumentRackApi.get('name').toString()
    const chainCount = instrumentRackApi.get('chains').length / 2
    const chains = createInstrumentChains(rackType, samplesFolder, name, pathToInstrumentRack, chainCount)
    const mixerPages = createParameterPages['Mixer'](pathToInstrumentRack, chainCount)

    return new InstrumentRack(name, chains, mixerPages)
}
