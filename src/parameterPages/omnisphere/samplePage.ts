import { OmnisphereSampleSelect } from '~/parameters/omnisphere/sampleSelect'
import { ParameterPage } from '~/models/parameterPage'

export class SamplePage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [new OmnisphereSampleSelect({ pathToChain, deviceIndex })]

        super(pageIndex, 'Sample', parameters)
    }
}
