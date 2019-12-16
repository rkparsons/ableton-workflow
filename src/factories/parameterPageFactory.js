import { createMixerParameters, createParameters } from './parameterFactory'

import { ParameterPage } from '../models/parameterPage'
import { parameterConfig } from '../config/parameterConfig'
import { parameterPageConfig } from '../config/parameterPageConfig'

export function createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, devicesCount) {
    //todo: replace vars with let
    var parameterPages = []
    var deviceTypeToIndex = {}
    var instrumentType = null

    for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToChain + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))
        const deviceName = deviceApi.get('name').toString()

        deviceTypeToIndex[deviceName] = deviceIndex

        if (deviceType === 1) {
            instrumentType = instrumentRackName === 'Break' ? 'BreakSampler' : deviceName
        }
    }

    // todo: remove this temp check
    if (parameterPageConfig[instrumentType] === undefined) {
        return null
    }

    parameterPageConfig[instrumentType].forEach(function(page, index) {
        const result = createParameters(samplesFolder, instrumentRackName, chainName, page.parameters, deviceTypeToIndex, pathToChain)

        parameterPages.push(new ParameterPage(index, page.name, result.parameters, result.repitchParameterIndex, result.bpmParameterIndex))
    })

    return parameterPages
}

export function createMixerPages(pathToDevice, chainCount) {
    const mixerPageNames = Object.keys(parameterConfig.Mixer)
    const mixerPages = []

    //todo: replace all object loops with forEach
    for (i in mixerPageNames) {
        const parameters = createMixerParameters(mixerPageNames[i], pathToDevice, chainCount)
        mixerPages.push(new ParameterPage(i, mixerPageNames[i], parameters))
    }

    return mixerPages
}
