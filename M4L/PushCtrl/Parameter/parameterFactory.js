const { EnumParameter } = require('enumParameter')
const { FilteredEnumParameter } = require('filteredEnumParameter')
const { ValueParameter } = require('valueParameter')
const { getCategories, getSampleGroups } = require('fileSystem')
const constants = require('constants')
const config = require('parameterConfig')

exports.createParameters = function(samplesFolder, drumPadName, drumLayerName, parameterNames, deviceTypeToIndex, pathToDrumLayer) {
    var parameters = []
    var categoryParameterIndex = null
    var sampleParameterIndex = null
    var sampleCategories = null

    for (var parameterindex = 0; parameterindex < parameterNames.length; parameterindex++) {
        if (parameterNames[parameterindex]) {
            const parameterNameParts = parameterNames[parameterindex].split('_')
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

            if (targetParameterName === 'Category') {
                sampleCategories = getCategories(samplesFolder, drumPadName, drumLayerName)
                parameterConfig.options = sampleCategories
                categoryParameterIndex = parameterindex

                parameters.push(new EnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
            } else if (targetParameterName === 'Select') {
                parameterConfig.options = getSampleGroups(samplesFolder, drumPadName, drumLayerName, sampleCategories)
                sampleParameterIndex = parameterindex
                parameters.push(new FilteredEnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
            } else if (parameterConfig.unitType === constants.unitType.ENUM) {
                parameters.push(new EnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
            } else {
                parameters.push(new ValueParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.unitType, parameterConfig.inputRange))
            }
        }
    }

    return {
        parameters: parameters,
        categoryParameterIndex: categoryParameterIndex,
        sampleParameterIndex: sampleParameterIndex,
    }
}
