import { ParameterPage } from './parameterPage'
import { createParameters, createMixerParameters } from './parameterFactory'
import { parameterPageConfig } from '../config/parameterPageConfig'
import { parameterConfig } from '../config/parameterConfig'

export function createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount) {
    //todo: replace vars with let
    var parameterPages = []
    var deviceTypeToIndex = {}
    var instrumentType = null

    for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))
        const deviceName = deviceApi.get('name').toString()

        deviceTypeToIndex[deviceName] = deviceIndex

        if (deviceType === 1) {
            instrumentType = deviceName
        }
    }

    parameterPageConfig[instrumentType].forEach(function(page, index) {
        const result = createParameters(samplesFolder, drumPadName, drumLayerName, page.parameters, deviceTypeToIndex, pathToDrumLayer)

        parameterPages.push(new ParameterPage(index, page.name, result.parameters, result.categoryParameterIndex, result.sampleParameterIndex, result.repitchParameterIndex, result.bpmParameterIndex))
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
