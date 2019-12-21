import { MixerVolume } from '../../parameters/mixer/volume'
import { ParameterPage } from '../../models/parameterPage'

export class VolumePage extends ParameterPage {
    constructor(pageIndex, pathToRack, chainCount) {
        let parameters = []

        for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
            parameters.push(new MixerVolume({ pathToChain: `${pathToRack} chains ${chainIndex}` }))
        }

        super(pageIndex, 'Volume', parameters)
    }
}
