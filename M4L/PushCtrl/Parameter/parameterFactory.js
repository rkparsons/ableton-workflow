const { EnumParameter } = require('enumParameter')
const { FilteredEnumParameter } = require('filteredEnumParameter')
const { ValueParameter } = require('valueParameter')
const { getCategories, getSampleGroups } = require('fileSystem')
const constants = require('constants')
const parameterConfig = require('parameterConfig')

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
            const targetDeviceConfig = parameterConfig[targetDeviceType]
            const targetParameterConfig = targetDeviceConfig ? targetDeviceConfig[targetParameterName] : null

            // can remove this check
            if (!targetParameterConfig) {
                continue
            }

            const apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value'
            const apiPath = targetDevicePath + ' ' + targetParameterConfig.path

            if (targetParameterName === 'Category') {
                sampleCategories = getCategories(samplesFolder, drumPadName, drumLayerName)
                targetParameterConfig.options = sampleCategories
                categoryParameterIndex = parameterindex

                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options))
            } else if (targetParameterName === 'Select') {
                targetParameterConfig.options = getSampleGroups(samplesFolder, drumPadName, drumLayerName, sampleCategories)
                sampleParameterIndex = parameterindex
                parameters.push(new FilteredEnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options))
            } else if (targetParameterConfig.unitType === constants.unitType.ENUM) {
                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options))
            } else {
                parameters.push(new ValueParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange))
            }
        }
    }

    return {
        parameters: parameters,
        categoryParameterIndex: categoryParameterIndex,
        sampleParameterIndex: sampleParameterIndex,
    }
}

exports.createMixerParameters = function(parameterName, pathToDrumLayers, drumLayersCount) {
    const targetParameterConfig = parameterConfig.Mixer[parameterName]
    var parameters = []

    for (var layerIndex = 0; layerIndex < drumLayersCount; layerIndex++) {
        const apiPath = pathToDrumLayers + ' chains ' + layerIndex + ' ' + targetParameterConfig.path
        const apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value'

        parameters.push(new ValueParameter('Volume', apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange))
    }

    return parameters
}
