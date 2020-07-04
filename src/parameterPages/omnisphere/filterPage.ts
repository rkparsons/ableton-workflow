import { OmnisphereFilterFreq } from '~/parameters/omnisphere/filterFreq'
import { ParameterPage } from '~/models/parameterPage'

export class FilterPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [new OmnisphereFilterFreq({ pathToChain, deviceIndex })]

        super(pageIndex, 'Filter', parameters)
    }
}
