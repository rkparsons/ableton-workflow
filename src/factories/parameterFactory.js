import { getCategories, getSampleGroups } from '../util/fileSystem'

import { EnumParameter } from '../models/enumParameter'
import { FilteredEnumParameter } from '../models/filteredEnumParameter'
import { RepitchParameter } from '../models/repitchParameter'
import { RepitchWarpParameter } from '../models/repitchWarpParameter'
import { ValueParameter } from '../models/valueParameter'
import { parameterConfig } from '../config/parameterConfig'
import unitType from '../constants/unitType'

export function createParameters(samplesFolder, instrumentRackName, chainName, parameterConfigs, deviceTypeToIndex, pathToChain) {
    let parameters = []
    let repitchWarpParameterIndex = null
    let bpmParameterIndex = null
    let sampleCategories = null

    for (var parameterConfigIndex = 0; parameterConfigIndex < parameterConfigs.length; parameterConfigIndex++) {
        if (parameterConfigs[parameterConfigIndex]) {
            const targetParameterConfig = parameterConfigs[parameterConfigIndex]()
            const targetDeviceType = targetParameterConfig.type
            const targetParameterName = targetParameterConfig.name
            const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
            const targetDevicePath = targetDeviceType === 'Project' ? 'live_set' : targetDeviceIndex !== undefined ? pathToChain + ' devices ' + targetDeviceIndex : pathToChain
            const apiPath = targetDevicePath + ' ' + targetParameterConfig.path

            // todo: pass config object and destructure in constructor
            // todo: refactor out conditional logic
            if (targetParameterName === 'Category') {
                sampleCategories = getCategories(samplesFolder, instrumentRackName, chainName)
                targetParameterConfig.options = sampleCategories

                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.options, null, true))
            } else if (targetParameterName === 'Select') {
                targetParameterConfig.options = getSampleGroups(samplesFolder, instrumentRackName, chainName, sampleCategories)
                parameters.push(new FilteredEnumParameter(targetParameterConfig.displayName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.options, true))
            } else if (targetParameterConfig.unitType === unitType.ENUM) {
                parameters.push(new EnumParameter(targetParameterConfig.displayName, apiPath, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.options, targetParameterConfig.randomRange))
            } else if (instrumentRackName === 'Break' && targetParameterName === 'Repitch') {
                const apiPathDecimal = targetDevicePath + ' ' + targetParameterConfig.pathDecimal
                repitchWarpParameterIndex = parameterConfigIndex
                parameters.push(new RepitchWarpParameter(targetParameterConfig.displayName, apiPath, apiPathDecimal, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
            } else if (targetParameterName === 'Repitch') {
                const apiPathDecimal = targetDevicePath + ' ' + targetParameterConfig.pathDecimal
                parameters.push(new RepitchParameter(targetParameterConfig.displayName, apiPath, apiPathDecimal, targetParameterConfig.property, targetParameterConfig.defaultValue, targetParameterConfig.unitType, targetParameterConfig.inputRange, targetParameterConfig.randomRange))
            } else {
                bpmParameterIndex = targetParameterName === 'Tempo' ? parameterConfigIndex : bpmParameterIndex
                parameters.push(
                    new ValueParameter(
                        targetParameterConfig.displayName,
                        apiPath,
                        targetParameterConfig.property,
                        targetParameterConfig.defaultValue,
                        targetParameterConfig.unitType,
                        targetParameterConfig.inputRange,
                        targetParameterConfig.randomRange,
                        targetParameterConfig.showValue,
                        targetParameterConfig.speed
                    )
                )
            }
        }
    }

    //todo: remove object return
    return {
        parameters: parameters,
        repitchParameterIndex: repitchWarpParameterIndex,
        bpmParameterIndex: bpmParameterIndex,
    }
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
