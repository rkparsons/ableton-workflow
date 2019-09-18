include('parameterPage')
const parameterFactory = require('parameterFactory')

exports.create = function(name, parameterNames, deviceTypeToIndex, pathToDrumLayer) {
    var parameters = []

    for (i in parameterNames) {
        if (parameterNames[i]) {
            const parameterNameParts = parameterNames[i].split('_')
            const targetDeviceType = parameterNameParts[0]
            const targetParameterName = parameterNameParts[1]
            const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
            const targetDevicePath = pathToDrumLayer + ' devices ' + targetDeviceIndex

            parameters.push(parameterFactory.create(targetDeviceType, targetParameterName, targetDevicePath))
        }
    }

    return new ParameterPage(name, parameters)
}
