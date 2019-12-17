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
        const config = parameterConstructor(pathToChain, deviceTypeToIndex, sampleCategories, sampleGroups)

        if (config.isCategory) {
            config.options = sampleCategories
        } else if (config.isSample) {
            config.optionGroups = sampleGroups
        }

        parameters.push(create(config))
    })

    return parameters
}

export function createParameter(deviceName, pathToChain, parameterName, deviceTypeToIndex = {}) {
    const parameterConstructor = parameterConfig[deviceName][parameterName]
    const config = parameterConstructor(pathToChain, deviceTypeToIndex)

    return create(config)
}

function create(config) {
    if (config.name === 'Category') {
        return new EnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.options, config.randomRange, config.isCategory)
    } else if (config.name === 'Select') {
        return new FilteredEnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.optionGroups, config.isSample)
    } else if (config.unitType === unitType.ENUM) {
        return new EnumParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.options, config.randomRange, config.isCategory)
    } else if (config.isRepitch && config.isWarp) {
        return new RepitchWarpParameter(config.displayName, `${config.basePath} ${config.path}`, `${config.basePath} ${config.pathDecimal}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange)
    } else if (config.isRepitch) {
        return new RepitchParameter(config.displayName, `${config.basePath} ${config.path}`, `${config.basePath} ${config.pathDecimal}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange)
    } else {
        return new ValueParameter(config.displayName, `${config.basePath} ${config.path}`, config.property, config.defaultValue, config.unitType, config.inputRange, config.randomRange, config.showValue, config.speed, config.isBpm)
    }
}
