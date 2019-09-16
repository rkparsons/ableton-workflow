include('drumLayer')
const parameterPageFactory = require('parameterPageFactory')
const parameterPageConfig = require('parameterPageConfig')

exports.create = function(layerName) {
    const deviceType = 'sampler'
    var parameterPages = []

    for (i in parameterPageConfig[deviceType]) {
        const config = parameterPageConfig[deviceType][i]
        parameterPages.push(parameterPageFactory.create(config.name, config.parameters))
    }

    return new DrumLayer(layerName, parameterPages)
}
