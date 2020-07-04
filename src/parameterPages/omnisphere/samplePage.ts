import { OmnisphereSampleSelect } from '~/parameters/omnisphere/sampleSelect'
import { ParameterPage } from '~/models/parameterPage'

export class SamplePage extends ParameterPage {
    constructor(pageIndex: number, chainName: string, pathToChain: string, deviceIndex: number) {
        const parameters = [new OmnisphereSampleSelect({ chainName, pathToChain, deviceIndex })]

        super(pageIndex, 'Sample', parameters)
    }
}
