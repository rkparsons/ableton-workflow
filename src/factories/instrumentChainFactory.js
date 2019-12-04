import { InstrumentChain } from '../models/instrumentChain'
import { createParameter } from './parameterFactory'
import { createParameterPages } from './parameterPageFactory'

export function createInstrumentChains(samplesFolder, instrumentRackName, pathToInstrumentRack, chainCount) {
    var chains = []

    for (var i = 0; i < chainCount; i++) {
        const pathToChain = pathToInstrumentRack + ' chains ' + i
        const chainApi = new LiveAPI(null, pathToChain)
        const chainName = chainApi.get('name').toString()
        const devicesCount = chainApi.get('devices').length / 2
        const parameterPages = createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, devicesCount)
        const muteParameter = createParameter('Chain', 'Mute', pathToChain)

        chains[i] = new InstrumentChain(i, chainName, parameterPages, muteParameter)
    }

    return chains
}
