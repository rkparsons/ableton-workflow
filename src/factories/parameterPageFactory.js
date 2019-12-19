import { ParameterPage } from '../models/parameterPage'
import { parameterPageConfig } from '../config/parameterPageConfig'

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
