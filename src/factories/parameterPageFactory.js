import { ParameterPage } from '../models/parameterPage'
import { parameterPageConfig } from '../config/parameterPageConfig'

export function createParameterPages(pathToChain, deviceIndex, options, optionGroups, pages) {
    return pages.map((page, index) => {
        const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain, deviceIndex, options, optionGroups }))

        return new ParameterPage(index, page.name, parameters)
    })
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
