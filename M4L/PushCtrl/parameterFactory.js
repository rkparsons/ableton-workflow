include('parameter')
const config = require('parameterConfig')

exports.create = function(parameterNames, deviceTypeToIndex, pathToDrumLayer) {
    var parameters = []

    for (i in parameterNames) {
        if (parameterNames[i]) {
            const parameterNameParts = parameterNames[i].split('_')
            const targetDeviceType = parameterNameParts[0]
            const targetParameterName = parameterNameParts[1]
            const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
            const targetDevicePath = pathToDrumLayer + ' devices ' + targetDeviceIndex
            const deviceConfig = config[targetDeviceType]
            const parameterConfig = deviceConfig ? deviceConfig[targetParameterName] : null

            if (parameterConfig) {
                parameters.push(new Parameter(targetParameterName, parameterConfig, targetDevicePath + ' ' + parameterConfig.path))
            }
        }
    }

    return parameters
}
