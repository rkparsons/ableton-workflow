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
        const config = parameterConstructor(pathToChain, deviceTypeToIndex)

        if (config.name === 'Category') {
            parameters.push(new EnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, sampleCategories, null, true))
        } else if (config.name === 'Select') {
            parameters.push(new FilteredEnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, sampleGroups, true))
        } else if (config.unitType === unitType.ENUM) {
            parameters.push(new EnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.options, config.randomRange, false))
        } else if (instrumentRackName === 'Break' && config.name === 'Repitch') {
            parameters.push(new RepitchWarpParameter(config.displayName, `${config.basePath} ${config.path}`, `${config.basePath} ${config.pathDecimal}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange))
        } else if (config.name === 'Repitch') {
            parameters.push(new RepitchParameter(config.displayName, `${config.basePath} ${config.path}`, `${config.basePath} ${config.pathDecimal}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange))
        } else {
            parameters.push(new ValueParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange, config.showValue, config.speed, config.name === 'Tempo'))
        }
    })

    return parameters
}

export function createParameter(deviceName, pathToChain, parameterName, deviceTypeToIndex = {}) {
    const config = parameterConfig[deviceName][parameterName](pathToChain, deviceTypeToIndex)

    if (config.unitType === unitType.ENUM) {
        return new EnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.options, config.randomRange, config.isCategory)
    } else {
        return new ValueParameter(parameterName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange, config.showValue, config.speed, config.isBpm)
    }
}
