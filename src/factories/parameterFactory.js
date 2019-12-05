import { getCategories, getSampleGroups } from '../util/fileSystem'

import { EnumParameter } from '../models/enumParameter'
import { FilteredEnumParameter } from '../models/filteredEnumParameter'
import { RepitchParameter } from '../models/repitchParameter'
import { RepitchWarpParameter } from '../models/repitchWarpParameter'
import { ValueParameter } from '../models/valueParameter'
import { parameterConfig } from '../config/parameterConfig'
import unitType from '../constants/unitType'

export function createParameters(samplesFolder, instrumentRackName, chainName, parameterNames, deviceTypeToIndex, pathToChain) {
    let parameters = []
    let categoryParameterIndex = null
    let sampleParameterIndex = null
    let repitchWarpParameterIndex = null
    let bpmParameterIndex = null
    let sampleCategories = null

    for (var parameterindex = 0; parameterindex < parameterNames.length; parameterindex++) {
        if (parameterNames[parameterindex]) {
            const parameterNameParts = parameterNames[parameterindex].split('_')
            const targetDeviceType = parameterNameParts[0]
            const targetParameterName = parameterNameParts[1]
            const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
            const targetDevicePath = targetDeviceType === 'Project' ? 'live_set' : targetDeviceIndex !== undefined ? pathToChain + ' devices ' + targetDeviceIndex : pathToChain
            // todo: don't update config object, create new type
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
                sampleCategories = getCategories(samplesFolder, instrumentRackName, chainName)
                targetParameterConfig.options = sampleCategories
                categoryParameterIndex = parameterindex

                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options))
            } else if (targetParameterName === 'Select') {
                targetParameterConfig.options = getSampleGroups(samplesFolder, instrumentRackName, chainName, sampleCategories)
                sampleParameterIndex = parameterindex
                parameters.push(new FilteredEnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options))
            } else if (targetParameterConfig.unitType === unitType.ENUM) {
                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange))
            } else if (instrumentRackName === 'Break' && targetParameterName === 'Repitch') {
                const apiPathDecimal = targetDevicePath + ' ' + targetParameterConfig.pathDecimal
                repitchWarpParameterIndex = parameterindex
                parameters.push(new RepitchWarpParameter(targetParameterConfig.displayName, apiPath, apiPathDecimal, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
            } else if (targetParameterName === 'Repitch') {
                const apiPathDecimal = targetDevicePath + ' ' + targetParameterConfig.pathDecimal
                parameters.push(new RepitchParameter(targetParameterConfig.displayName, apiPath, apiPathDecimal, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
            } else {
                bpmParameterIndex = targetParameterName === 'Tempo' ? parameterindex : bpmParameterIndex
                parameters.push(
                    new ValueParameter(targetParameterConfig.displayName, apiPath, apiProperty, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange, targetParameterConfig.showValue, targetParameterConfig.speed)
                )
            }
        }
    }

    //todo: remove object return
    return {
        parameters: parameters,
        categoryParameterIndex: categoryParameterIndex,
        sampleParameterIndex: sampleParameterIndex,
        repitchParameterIndex: repitchWarpParameterIndex,
        bpmParameterIndex: bpmParameterIndex,
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
