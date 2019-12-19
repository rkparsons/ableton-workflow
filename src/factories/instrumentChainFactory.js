import { ChainMute } from '../parameters/chain/mute'
import { InstrumentChain } from '../models/instrumentChain'
import { createParameterPages } from './parameterPageFactory'
import device from '../constants/deviceType'

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
    let deviceTypeToIndex = {}
    let instrumentType = null

    // todo: refactor device iteration into separate class
    for (let deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToChain + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))
        const deviceName = deviceApi.get('name').toString()

        deviceTypeToIndex[deviceName] = deviceIndex

        if (deviceType === device.INSTRUMENT) {
            instrumentType = instrumentRackName === 'Break' ? 'BreakSampler' : deviceName
        }
    }

    const parameterPages = createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceTypeToIndex, instrumentType)
    const muteParameter = new ChainMute({ pathToChain })

    return new InstrumentChain(chainIndex, chainName, parameterPages, muteParameter)
}
