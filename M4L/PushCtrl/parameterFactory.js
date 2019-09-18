exports.create = function(parameterNames, deviceTypeToIndex, pathToDrumLayer) {
    include('parameter')
    const config = require('parameterConfig')

    var parameters = []

    for (i in parameterNames) {
        if (parameterNames[i]) {
            const parameterNameParts = parameterNames[i].split('_')
            const targetDeviceType = parameterNameParts[0]
            const targetParameterName = parameterNameParts[1]
            const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
            const targetDevicePath = targetDeviceIndex !== undefined ? pathToDrumLayer + ' devices ' + targetDeviceIndex : pathToDrumLayer
            const deviceConfig = config[targetDeviceType]
            const parameterConfig = deviceConfig ? deviceConfig[targetParameterName] : null

            // can remove this check
            if (!parameterConfig) {
                continue
            }

            const apiProperty = parameterConfig.property ? parameterConfig.property : 'value'
            const apiPath = targetDevicePath + ' ' + parameterConfig.path

            if (parameterConfig.unitType === constants.unitType.ENUM) {
                parameters.push(new EnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
            } else {
                parameters.push(new ValueParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.unitType, parameterConfig.inputRange, parameterConfig.displayRange))
            }
        }
    }

    return parameters
}
