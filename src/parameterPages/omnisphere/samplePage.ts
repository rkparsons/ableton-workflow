import { OmnisphereSampleSelect } from '~/parameters/omnisphere/sampleSelect'
import { OmnisphereTimbre } from '~/parameters/omnisphere/timbre'
import { OmnisphereTimbreMode } from '~/parameters/omnisphere/timbreMode'
import { ParameterPage } from '~/models/parameterPage'

export class SamplePage extends ParameterPage {
    constructor(pageIndex: number, chainName: string, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereSampleSelect({ chainName, pathToChain, deviceIndex }),
            new OmnisphereTimbreMode({ pathToChain, deviceIndex }),
            new OmnisphereTimbre({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Sample', parameters)
    }
}
