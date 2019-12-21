import { ParameterPage } from '../../models/parameterPage'

export class MixerPage extends ParameterPage {
    constructor(pageIndex, pathToRack, chainCount, name, ParameterType) {
        let parameters = []

        for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
            parameters.push(new ParameterType({ pathToChain: `${pathToRack} chains ${chainIndex}` }))
        }

        super(pageIndex, name, parameters)
    }
}
