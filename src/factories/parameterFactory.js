import { getCategories, getSampleGroups } from '../util/fileSystem'

export function createParameters(samplesFolder, instrumentRackName, chainName, parameterConstructors, deviceTypeToIndex, pathToChain) {
    const categories = getCategories(samplesFolder, instrumentRackName, chainName)
    const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)

    return parameterConstructors.map(parameterConstructor => parameterConstructor({ pathToChain, deviceTypeToIndex, options: categories, optionGroups: samples }))
}
