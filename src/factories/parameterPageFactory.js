import { MixerPanning } from '../parameters/mixer/panning'
import { MixerVolume } from '../parameters/mixer/volume'
import { ParameterPage } from '../models/parameterPage'

export function createMixerPages(pathToRack, chainCount) {
    const mixerPages = []
    const pages = [MixerVolume, MixerPanning]

    pages.forEach(ParameterClass => {
        let parameters = []

        for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
            const pathToChain = `${pathToRack} chains ${chainIndex}`

            parameters.push(new ParameterClass({ pathToChain }))
        }

        mixerPages.push(new ParameterPage(i, parameters[0].name, parameters))
    })

    return mixerPages
}
