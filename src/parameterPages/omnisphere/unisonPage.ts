import { OmnisphereUnisonOn } from '~/parameters/omnisphere/unisonOn'
import { ParameterPage } from '~/models/parameterPage'

export class UnisonPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [new OmnisphereUnisonOn({ pathToChain, deviceIndex })]

        super(pageIndex, 'Unison', parameters)
    }
}
