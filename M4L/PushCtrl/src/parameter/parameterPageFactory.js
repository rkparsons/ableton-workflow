import { ParameterPage } from './parameterPage'
import { createParameters, createMixerParameters } from './parameterFactory'
import { parameterPageConfig } from '../config/parameterPageConfig'
import { parameterConfig } from '../config/parameterConfig'

export function createParameterPages(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount) {
    var parameterPages = []
    var parameterPageNames = []
    var deviceTypeToIndex = {}
    var instrumentType = null

    for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))
        const deviceName = deviceApi.get('name')

        deviceTypeToIndex[deviceName] = deviceIndex

        if (deviceType === 1) {
            instrumentType = deviceName
        }
    }

    for (i in parameterPageConfig[instrumentType]) {
        const page = parameterPageConfig[instrumentType][i]
        const result = createParameters(samplesFolder, drumPadName, drumLayerName, page.parameters, deviceTypeToIndex, pathToDrumLayer)

        parameterPages.push(new ParameterPage(i, page.name, result.parameters, result.categoryParameterIndex, result.sampleParameterIndex))
        parameterPageNames.push(page.name)
    }

    return { parameterPages: parameterPages, parameterPageNames: parameterPageNames }
}

export function createMixerPages(pathToDevice, chainCount) {
    const mixerPageNames = Object.keys(parameterConfig.Mixer)
    const mixerPages = []

    for (i in mixerPageNames) {
        const parameters = createMixerParameters(mixerPageNames[i], pathToDevice, chainCount)
        mixerPages.push(new ParameterPage(i, mixerPageNames[i], parameters))
    }

    return { mixerPages: mixerPages, mixerPageNames: mixerPageNames }
}
