import { MixerPanning } from '~/parameters/mixer/panning'
import { MixerVolume } from '~/parameters/mixer/volume'
import { ParameterPage } from '~/models/parameterPage'

export abstract class MixerPage extends ParameterPage {
    constructor(pageIndex: number, pathToRack: string, chainCount: number, name: string, ParameterType: typeof MixerPanning | typeof MixerVolume) {
        let parameters = []

        for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
            parameters.push(new ParameterType({ pathToChain: `${pathToRack} chains ${chainIndex}` }))
        }

        super(pageIndex, name, parameters)
    }
}
