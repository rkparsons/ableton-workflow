import { getCategories, getSampleGroups } from '../util/fileSystem'

import { EnumParameter } from '../models/enumParameter'
import { FilteredEnumParameter } from '../models/filteredEnumParameter'
import { RepitchParameter } from '../models/repitchParameter'
import { RepitchWarpParameter } from '../models/repitchWarpParameter'
import { ValueParameter } from '../models/valueParameter'
import { parameterConfig } from '../config/parameterConfig'
import unitType from '../constants/unitType'

export function createParameters(samplesFolder, instrumentRackName, chainName, parameterConstructors, deviceTypeToIndex, pathToChain) {
    let parameters = []
    const sampleCategories = getCategories(samplesFolder, instrumentRackName, chainName)
    const sampleGroups = getSampleGroups(samplesFolder, instrumentRackName, chainName, sampleCategories)

    parameterConstructors.forEach(parameterConstructor => {
        const config = parameterConstructor()
        const targetDeviceType = config.type
        const targetParameterName = config.name
        const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
        const targetDevicePath = targetDeviceType === 'Project' ? 'live_set' : targetDeviceIndex !== undefined ? pathToChain + ' devices ' + targetDeviceIndex : pathToChain
        const apiPath = targetDevicePath + ' ' + config.path
        const apiPathDecimal = targetDevicePath + ' ' + config.pathDecimal

        // todo: pass config object and destructure in constructor
        // todo: refactor out conditional logic
        if (targetParameterName === 'Category') {
            parameters.push(new EnumParameter(config.displayName, apiPath, config.property, config.defaultValue, sampleCategories, null, true))
        } else if (targetParameterName === 'Select') {
            parameters.push(new FilteredEnumParameter(config.displayName, apiPath, config.property, config.defaultValue, sampleGroups, true))
        } else if (config.unitType === unitType.ENUM) {
            parameters.push(new EnumParameter(config.displayName, apiPath, config.property, config.defaultValue, config.options, config.randomRange))
        } else if (instrumentRackName === 'Break' && targetParameterName === 'Repitch') {
            parameters.push(new RepitchWarpParameter(config.displayName, apiPath, apiPathDecimal, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange))
        } else if (targetParameterName === 'Repitch') {
            parameters.push(new RepitchParameter(config.displayName, apiPath, apiPathDecimal, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange))
        } else {
            parameters.push(new ValueParameter(config.displayName, apiPath, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange, config.showValue, config.speed, targetParameterName === 'Tempo'))
        }
    })

    return parameters
}

export function createMixerParameters(parameterName, pathToDevice, chainCount) {
    const targetParameterConfig = parameterConfig.Mixer[parameterName]()
    var parameters = []

    for (var chainIndex = 0; chainIndex < chainCount; chainIndex++) {
        const apiPath = pathToDevice + ' chains ' + chainIndex + ' ' + (targetParameterConfig.path || '')

        if (targetParameterConfig.unitType === unitType.ENUM) {
            parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange))
        } else {
            parameters.push(new ValueParameter(parameterName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange))
        }
    }

    return parameters
}

export function createParameter(deviceName, parameterName, pathToDevice) {
    const targetParameterConfig = parameterConfig[deviceName][parameterName]()
    const apiPath = pathToDevice + (targetParameterConfig.path || '')

    if (targetParameterConfig.unitType === unitType.ENUM) {
        return new EnumParameter(targetParameterConfig.displayName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange)
    } else {
        return new ValueParameter(parameterName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange)
    }
}
