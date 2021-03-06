import { InstrumentRack } from '~/models/instrumentRack'
import RackType from '~/constants/rackType'
import { createInstrumentChains } from '~/factories/instrumentChainFactory'
import { createParameterPages } from '~/factories/parameterPageFactory'

// todo: make samplesFolder optional param
export function createInstrumentRack(rackType: RackType, samplesFolder: string, pathToInstrumentRack: string) {
    const instrumentRackApi = new LiveAPI(null, pathToInstrumentRack)
    const name = instrumentRackApi.get('name').toString()
    const isInstrumentRack = instrumentRackApi.get('can_have_chains')[0] === 1

    if (!isInstrumentRack) {
        return undefined
    }

    const chainCount = instrumentRackApi.get('chains').length / 2
    const chains = createInstrumentChains(rackType, samplesFolder, name, pathToInstrumentRack, chainCount)
    const mixerPages = createParameterPages['Mixer'](pathToInstrumentRack, chainCount)

    return new InstrumentRack(name, chains, mixerPages)
}
