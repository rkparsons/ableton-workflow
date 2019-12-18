import { getCategories, getSampleGroups } from '../util/fileSystem'

import { ParameterPage } from '../models/parameterPage'
import { parameterPageConfig } from '../config/parameterPageConfig'

export function createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, devicesCount) {
    //todo: replace vars with let
    var parameterPages = []
    var deviceTypeToIndex = {}
    var instrumentType = null

    for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
        const deviceApi = new LiveAPI(null, pathToChain + ' devices ' + deviceIndex)
        const deviceType = parseInt(deviceApi.get('type'))
        const deviceName = deviceApi.get('name').toString()

        deviceTypeToIndex[deviceName] = deviceIndex

        if (deviceType === 1) {
            instrumentType = instrumentRackName === 'Break' ? 'BreakSampler' : deviceName
        }
    }

    // todo: remove this temp check
    if (parameterPageConfig[instrumentType] === undefined) {
        return null
    }

    parameterPageConfig[instrumentType].forEach(function(page, index) {
        const categories = getCategories(samplesFolder, instrumentRackName, chainName)
        const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)
        const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain, deviceTypeToIndex, options: categories, optionGroups: samples }))

        parameterPages.push(new ParameterPage(index, page.name, parameters))
    })

    return parameterPages
}

export function createMixerPages(pathToRack, chainCount) {
    const mixerPages = []

    parameterPageConfig.Mixer.forEach(ParameterClass => {
        let parameters = []

        for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
            const pathToChain = `${pathToRack} chains ${chainIndex}`

            parameters.push(new ParameterClass({ pathToChain }))
        }

        mixerPages.push(new ParameterPage(i, parameters[0].name, parameters))
    })

    return mixerPages
}
