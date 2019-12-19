import { ChainMute } from '../parameters/chain/mute'
import { InstrumentChain } from '../models/instrumentChain'
import { createDevice } from '../factories/deviceFactory'
import device from '../constants/deviceType'
import log from '../util/log'

export function createInstrumentChains(samplesFolder, instrumentRackName, pathToInstrumentRack, chainCount) {
    let chains = []

    for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
        chains[chainIndex] = createInstrumentChain(samplesFolder, instrumentRackName, pathToInstrumentRack, chainIndex)
    }

    return chains
}

function createInstrumentChain(samplesFolder, instrumentRackName, pathToInstrumentRack, chainIndex) {
    const pathToChain = pathToInstrumentRack + ' chains ' + chainIndex
    const chainApi = new LiveAPI(null, pathToChain)
    const chainName = chainApi.get('name').toString()
    const devicesCount = chainApi.get('devices').length / 2
    let instrumentParameterPages = []

    // todo: refactor device iteration into separate class
    for (let deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToChain + ' devices ' + deviceIndex)
        const deviceType = device[deviceApi.get('type')]
        const deviceName = deviceApi.get('name').toString()
        deviceName = instrumentRackName === 'Break' ? 'BreakSampler' : deviceName
        const constructor = createDevice[deviceType][deviceName]

        if (constructor) {
            instrumentParameterPages.push(constructor(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex))
        }
    }

    const muteParameter = new ChainMute({ pathToChain })

    return new InstrumentChain(chainIndex, chainName, instrumentParameterPages[0], muteParameter)
}
