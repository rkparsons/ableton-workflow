const { ParameterPage } = require('parameterPage')
const { createParameters } = require('parameterFactory')
const config = require('parameterPageConfig')

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

    for (i in config[instrumentType]) {
        const page = config[instrumentType][i]
        const result = createParameters(samplesFolder, drumPadName, drumLayerName, page.parameters, deviceTypeToIndex, pathToDrumLayer)

        parameterPages.push(new ParameterPage(page.name, result.parameters, result.categoryParameterIndex, result.sampleParameterIndex))
        parameterPageNames.push(page.name)
    }

    return { parameterPages: parameterPages, parameterPageNames: parameterPageNames }
}
