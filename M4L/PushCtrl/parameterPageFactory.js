exports.create = function(pathToDrumLayer, devicesCount) {
    include('parameterPage')
    const config = require('parameterPageConfig')
    const parameterFactory = require('parameterFactory')
    var parameterPages = []
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
        const parameters = parameterFactory.create(page.parameters, deviceTypeToIndex, pathToDrumLayer)
        parameterPages.push(new ParameterPage(page.name, parameters))
    }

    return parameterPages
}
