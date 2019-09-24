const { ParameterPage } = require('parameterPage')
const { createParameters, createMixerParameters } = require('parameterFactory')
const parameterPageConfig = require('parameterPageConfig')
const parameterConfig = require('parameterConfig')

exports.createParameterPages = function(samplesFolder, drumPadName, drumLayerName, pathToDrumLayer, devicesCount) {
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

        parameterPages.push(new ParameterPage(page.name, result.parameters, result.categoryParameterIndex, result.sampleParameterIndex))
        parameterPageNames.push(page.name)
    }

    return { parameterPages: parameterPages, parameterPageNames: parameterPageNames }
}

exports.createMixerPages = function(pathToDrumLayers, drumLayerCount) {
    const mixerPageNames = Object.keys(parameterConfig.Mixer)
    const mixerPages = []

    for (i in mixerPageNames) {
        const parameters = createMixerParameters(mixerPageNames[i], pathToDrumLayers, drumLayerCount)
        mixerPages.push(new ParameterPage(mixerPageNames[i], parameters))
    }

    return { mixerPages: mixerPages, mixerPageNames: mixerPageNames }
}
