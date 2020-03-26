import { ChainMute } from '~/parameters/chain/mute'
import { InstrumentChain } from '~/models/instrumentChain'
import RackType from '~/constants/rackType'
import { createParameterPages } from '~/factories/parameterPageFactory'

export function createInstrumentChains(rackType: RackType, samplesFolder: string, instrumentRackName: string, pathToInstrumentRack: string, chainCount: number) {
    let chains = []

    for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
        chains[chainIndex] = createInstrumentChain(rackType, samplesFolder, instrumentRackName, pathToInstrumentRack, chainIndex)
    }

    return chains
}

function createInstrumentChain(rackType: RackType, samplesFolder: string, instrumentRackName: string, pathToInstrumentRack: string, chainIndex: number) {
    const pathToChain = pathToInstrumentRack + ' chains ' + chainIndex
    const chainApi = new LiveAPI(null, pathToChain)
    const chainName = chainApi.get('name').toString()
    const devicesCount = chainApi.get('devices').length / 2
    let instrumentParameterPages = []

    // todo: refactor device iteration into separate class
    for (let deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToChain + ' devices ' + deviceIndex)
        let deviceName = deviceApi.get('name').toString() as string
        deviceName = deviceName === 'Sampler' ? `${rackType}Sampler` : deviceName
        // todo: replace with strategy pattern
        const constructor = createParameterPages[deviceName]

        if (constructor) {
            instrumentParameterPages.push(constructor(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex))
        }
    }

    const muteParameter = new ChainMute({ pathToChain })

    return new InstrumentChain(chainIndex, chainName, instrumentParameterPages[0], muteParameter)
}
