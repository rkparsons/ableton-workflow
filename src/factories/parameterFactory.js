import { getCategories, getSampleGroups } from '../util/fileSystem'

import { parameterConfig } from '../config/parameterConfig'

export function createParameters(samplesFolder, instrumentRackName, chainName, parameterConstructors, deviceTypeToIndex, pathToChain) {
    // todo: rename vars
    const options = getCategories(samplesFolder, instrumentRackName, chainName)
    const optionGroups = getSampleGroups(samplesFolder, instrumentRackName, chainName, options)

    return parameterConstructors.map(parameterConstructor => parameterConstructor({ pathToChain, deviceTypeToIndex, options, optionGroups }))
}

// todo: method not needed
export function createParameter(deviceName, pathToChain, parameterName, deviceTypeToIndex = {}) {
    const parameterConstructor = parameterConfig[deviceName][parameterName]

    return parameterConstructor({ pathToChain, deviceTypeToIndex })
}
