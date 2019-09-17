include('drumLayer')
const parameterPageFactory = require('parameterPageFactory')
const parameterPageConfig = require('parameterPageConfig')

exports.create = function(drumLayerApi, pathToDrumLayer) {
    const deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices 1')
    const deviceType = deviceApi.get('name')
    var parameterPages = []

    for (i in parameterPageConfig[deviceType]) {
        const config = parameterPageConfig[deviceType][i]
        parameterPages.push(parameterPageFactory.create(config.name, config.parameters))
    }

    return new DrumLayer(drumLayerApi, parameterPages)
}
