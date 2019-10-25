import { EnumParameter } from './enumParameter'
import { FilteredEnumParameter } from './filteredEnumParameter'
import { ValueParameter } from './valueParameter'
import { RepitchParameter } from './repitchParameter'
import { RepitchWarpParameter } from './repitchWarpParameter'
import { getCategories, getSampleGroups } from '../fileSystem/fileSystem'
import { unitType } from '../constants'
import { parameterConfig } from '../config/parameterConfig'

export function createParameters(samplesFolder, drumPadName, drumLayerName, parameterNames, deviceTypeToIndex, pathToDrumLayer) {
    let parameters = []
    let categoryParameterIndex = null
    let sampleParameterIndex = null
    let repitchParameterIndex = null
    let sampleCategories = null

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

            //todo: pass config object and destructure in constructor
            // refactor out conditional logic
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
            } else if (drumPadName === 'Break' && targetParameterName === 'Repitch') {
                const apiPathDecimal = targetDevicePath + ' ' + targetParameterConfig.pathDecimal
                repitchParameterIndex = parameterindex
                parameters.push(new RepitchWarpParameter(targetParameterConfig.displayName, apiPath, apiPathDecimal, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
            } else if (targetParameterName === 'Repitch') {
                const apiPathDecimal = targetDevicePath + ' ' + targetParameterConfig.pathDecimal
                repitchParameterIndex = parameterindex
                parameters.push(new RepitchParameter(targetParameterConfig.displayName, apiPath, apiPathDecimal, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
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
        repitchParameterIndex: repitchParameterIndex,
    }
}

export function createMixerParameters(parameterName, pathToDevice, chainCount) {
    const targetParameterConfig = parameterConfig.Mixer[parameterName]
    var parameters = []

    for (var chainIndex = 0; chainIndex < chainCount; chainIndex++) {
        const apiPath = pathToDevice + ' chains ' + chainIndex + ' ' + (targetParameterConfig.path || '')
        const apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value'

        if (targetParameterConfig.unitType === unitType.ENUM) {
            parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange))
        } else {
            parameters.push(new ValueParameter(parameterName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange))
        }
    }

    return parameters
}

export function createParameter(deviceName, parameterName, pathToDevice) {
    const targetParameterConfig = parameterConfig[deviceName][parameterName]
    const apiPath = pathToDevice + (targetParameterConfig.path || '')
    const apiProperty = targetParameterConfig.property ? targetParameterConfig.property : 'value'

    if (targetParameterConfig.unitType === unitType.ENUM) {
        return new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange)
    } else {
        return new ValueParameter(parameterName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange)
    }
}
