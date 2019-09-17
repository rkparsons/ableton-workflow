include('drumLayer')
const parameterPageFactory = require('parameterPageFactory')
const parameterPageConfig = require('parameterPageConfig')

exports.create = function(drumLayerApi, pathToDrumLayer) {
    var parameterPages = []
    const instrumentType = getInstrumentType(pathToDrumLayer)

    for (i in parameterPageConfig[instrumentType]) {
        const config = parameterPageConfig[instrumentType][i]
        parameterPages.push(parameterPageFactory.create(config.name, config.parameters))
    }

    return new DrumLayer(drumLayerApi, parameterPages)
}

function getInstrumentType(pathToDrumLayer) {
    const maxDevices = 5

    for (var deviceIndex = 0; deviceIndex < maxDevices; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))

        if (deviceType === 1) {
            return deviceApi.get('name')
        }
    }
}
