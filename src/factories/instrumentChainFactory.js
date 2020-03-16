import { ChainMute } from '../parameters/chain/mute'
import { InstrumentChain } from '../models/instrumentChain'
import { LiveAPI } from '../types/m4l.d.ts'
import { createParameterPages } from './parameterPageFactory'

export function createInstrumentChains(rackType, samplesFolder, instrumentRackName, pathToInstrumentRack, chainCount) {
    let chains = []

    for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
        chains[chainIndex] = createInstrumentChain(rackType, samplesFolder, instrumentRackName, pathToInstrumentRack, chainIndex)
    }

    return chains
}

function createInstrumentChain(rackType, samplesFolder, instrumentRackName, pathToInstrumentRack, chainIndex) {
    const pathToChain = pathToInstrumentRack + ' chains ' + chainIndex
    const chainApi = new LiveAPI(null, pathToChain)
    const chainName = chainApi.get('name').toString()
    const devicesCount = chainApi.get('devices').length / 2
    let instrumentParameterPages = []

    // todo: refactor device iteration into separate class
    for (let deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToChain + ' devices ' + deviceIndex)
        let deviceName = deviceApi.get('name').toString()
        deviceName = instrumentRackName === 'Break' ? 'BreakSampler' : deviceName
        deviceName = deviceName === 'Sampler' ? `${rackType}Sampler` : deviceName
        const constructor = createParameterPages[deviceName]

        if (constructor) {
            instrumentParameterPages.push(constructor(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex))
        }
    }

    const muteParameter = new ChainMute({ pathToChain })

    return new InstrumentChain(chainIndex, chainName, instrumentParameterPages[0], muteParameter)
}
