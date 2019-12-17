import { getCategories, getSampleGroups } from '../util/fileSystem'

import { EnumParameter } from '../models/enumParameter'
import { FilteredEnumParameter } from '../models/filteredEnumParameter'
import { RepitchParameter } from '../models/repitchParameter'
import { RepitchWarpParameter } from '../models/repitchWarpParameter'
import { ValueParameter } from '../models/valueParameter'
import { parameterConfig } from '../config/parameterConfig'
import unit from '../constants/unitType'

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

function create({ name, basePath, path, pathDecimal, property, defaultValue, options, randomRange, isCategory, optionGroups, isSample, unitType, inputRange, showValue, speed, isBpm, isRepitch, isWarp }) {
    const livePath = `${basePath} ${path}`
    const livePathDecimal = `${basePath} ${pathDecimal}`

    if (name === 'Category') {
        return new EnumParameter({ name, livePath, property, defaultValue, options, randomRange, isCategory })
    } else if (name === 'Sample') {
        return new FilteredEnumParameter({ name, livePath, property, defaultValue, optionGroups, isSample })
    } else if (unitType === unit.ENUM) {
        return new EnumParameter({ name, livePath, property, defaultValue, options, randomRange, isCategory })
    } else if (isRepitch && isWarp) {
        return new RepitchWarpParameter({
            name,
            livePath,
            livePathDecimal,
            property,
            defaultValue,
            unitType,
            inputRange,
            randomRange,
        })
    } else if (isRepitch) {
        return new RepitchParameter({
            name,
            livePath,
            livePathDecimal,
            property,
            defaultValue,
            unitType,
            inputRange,
            randomRange,
        })
    } else {
        return new ValueParameter({
            name,
            livePath,
            property,
            defaultValue,
            unitType,
            inputRange,
            randomRange,
            showValue,
            speed,
            isBpm,
        })
    }
}
