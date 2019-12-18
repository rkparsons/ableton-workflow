import { getCategories, getSampleGroups } from '../util/fileSystem'

import { parameterConfig } from '../config/parameterConfig'

export function createParameters(samplesFolder, instrumentRackName, chainName, parameterConstructors, deviceTypeToIndex, pathToChain) {
    const sampleCategories = getCategories(samplesFolder, instrumentRackName, chainName)
    const sampleGroups = getSampleGroups(samplesFolder, instrumentRackName, chainName, sampleCategories)

    return parameterConstructors.map(parameterConstructor => parameterConstructor(pathToChain, deviceTypeToIndex))
}

// todo: method not needed
export function createParameter(deviceName, pathToChain, parameterName, deviceTypeToIndex = {}) {
    const parameterConstructor = parameterConfig[deviceName][parameterName]

    return parameterConstructor(pathToChain, deviceTypeToIndex)
}
