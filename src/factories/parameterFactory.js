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
        return new EnumParameter({ name: config.displayName, livePath: `${config.basePath} ${config.path}`, property: config.property, defaultValue: config.defaultValue, options: config.options, randomRange: config.randomRange, isCategory: config.isCategory })
    } else if (config.name === 'Select') {
        return new FilteredEnumParameter({ name: config.displayName, livePath: `${config.basePath} ${config.path}`, property: config.property, defaultValue: config.defaultValue, optionGroups: config.optionGroups, isSample: config.isSample })
    } else if (config.unitType === unitType.ENUM) {
        return new EnumParameter({ name: config.displayName, livePath: `${config.basePath} ${config.path}`, property: config.property, defaultValue: config.defaultValue, options: config.options, randomRange: config.randomRange, isCategory: config.isCategory })
    } else if (config.isRepitch && config.isWarp) {
        return new RepitchWarpParameter({
            name: config.displayName,
            livePath: `${config.basePath} ${config.path}`,
            livePathDecimal: `${config.basePath} ${config.pathDecimal}`,
            property: config.property,
            defaultValue: config.defaultValue,
            unitType: config.unitType,
            inputRange: config.inputRange,
            randomRange: config.randomRange,
        })
    } else if (config.isRepitch) {
        return new RepitchParameter({
            name: config.displayName,
            livePath: `${config.basePath} ${config.path}`,
            livePathDecimal: `${config.basePath} ${config.pathDecimal}`,
            property: config.property,
            defaultValue: config.defaultValue,
            unitType: config.unitType,
            inputRange: config.inputRange,
            randomRange: config.randomRange,
        })
    } else {
        return new ValueParameter({
            name: config.displayName,
            livePath: `${config.basePath} ${config.path}`,
            property: config.property,
            defaultValue: config.defaultValue,
            unitType: config.unitType,
            inputRange: config.inputRange,
            randomRange: config.randomRange,
            showValue: config.showValue,
            speed: config.speed,
            isBpm: config.isBpm,
        })
    }
}
