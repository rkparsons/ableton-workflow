import { MixerPanning } from '../../parameters/mixer/panning'
import { ParameterPage } from '../../models/parameterPage'

// todo: create mixer page base class to loop chains
export class PanningPage extends ParameterPage {
    constructor(pageIndex, pathToRack, chainCount) {
        let parameters = []

        for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
            parameters.push(new MixerPanning({ pathToChain: `${pathToRack} chains ${chainIndex}` }))
        }

        super(pageIndex, 'Panning', parameters)
    }
}
