import { OmnisphereFMOn } from '~/parameters/omnisphere/fmOn'
import { ParameterPage } from '~/models/parameterPage'

export class FMPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [new OmnisphereFMOn({ pathToChain, deviceIndex })]

        super(pageIndex, 'FM', parameters)
    }
}
