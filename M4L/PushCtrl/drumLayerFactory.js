include('drumLayer')
const parameterPageFactory = require('parameterPageFactory')
const parameterPageConfig = require('parameterPageConfig')

exports.create = function(drumLayerApi, pathToDrumLayer) {
    const devicesCount = drumLayerApi.get('devices').length / 2
    var parameterPages = []
    var deviceNameToIndex = {}
    var instrumentType = null

    for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))
        const deviceName = deviceApi.get('name')

        deviceNameToIndex[deviceName] = deviceIndex

        if (deviceType === 1) {
            instrumentType = deviceName
        }
    }

    for (i in parameterPageConfig[instrumentType]) {
        const page = parameterPageConfig[instrumentType][i]
        parameterPages.push(parameterPageFactory.create(page.name, page.parameters, deviceNameToIndex, pathToDrumLayer))
    }

    return new DrumLayer(drumLayerApi.get('name'), parameterPages)
}

function getInstrumentType(pathToDrumLayer) {}
