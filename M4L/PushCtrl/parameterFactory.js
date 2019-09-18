exports.create = function(parameterNames, deviceTypeToIndex, pathToDrumLayer) {
    include('parameter')
    include('parameterEnum')
    const config = require('parameterConfig')
    const constants = require('constants')
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

            // can remove this check
            if (!parameterConfig) {
                continue
            }

            const apiProperty = config.property ? config.property : 'value'
            const apiPath = targetDevicePath + ' ' + parameterConfig.path

            if (parameterConfig.unitType === constants.unitType.ENUM) {
                parameters.push(new ParameterEnum(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
            } else {
                parameters.push(new Parameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.unitType, parameterConfig.inputRange, parameterConfig.displayRange))
            }
        }
    }

    return parameters
}
