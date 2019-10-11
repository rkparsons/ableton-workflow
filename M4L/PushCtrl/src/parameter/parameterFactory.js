import { EnumParameter } from './enumParameter'
import { FilteredEnumParameter } from './filteredEnumParameter'
import { ValueParameter } from './valueParameter'
import { getCategories, getSampleGroups } from '../fileSystem/fileSystem'
import { unitType } from '../constants'
import { parameterConfig } from '../config/parameterConfig'
import { log } from '../util'

export function createParameters(samplesFolder, drumPadName, drumLayerName, parameterNames, deviceTypeToIndex, pathToDrumLayer) {
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
            } else if (targetParameterConfig.unitType === unitType.ENUM) {
                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange))
            } else {
                parameters.push(new ValueParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
            }
        }
    }

    //todo: remove object return
    return {
        parameters: parameters,
        categoryParameterIndex: categoryParameterIndex,
        sampleParameterIndex: sampleParameterIndex,
    }
}

export function createMixerParameters(parameterName, pathToDevice, chainCount) {
    const targetParameterConfig = parameterConfig.Mixer[parameterName]
    var parameters = []

    for (var chainIndex = 0; chainIndex < chainCount; chainIndex++) {
        const apiPath = pathToDevice + ' chains ' + chainIndex + ' ' + (targetParameterConfig.path || '')
        const apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value'

        if (parameterName === 'Mute' && chainIndex === 0) {
            log(apiPath, apiProperty)
        }

        if (targetParameterConfig.unitType === unitType.ENUM) {
            parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange))
        } else {
            parameters.push(new ValueParameter(parameterName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange))
        }
    }

    return parameters
}
