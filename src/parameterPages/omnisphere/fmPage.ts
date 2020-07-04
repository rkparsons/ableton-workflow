import { OmnisphereFMFreq } from '~/parameters/omnisphere/fmFreq'
import { OmnisphereFMOn } from '~/parameters/omnisphere/fmOn'
import { OmnisphereFMTracking } from '~/parameters/omnisphere/fmTracking'
import { ParameterPage } from '~/models/parameterPage'

export class FMPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [new OmnisphereFMOn({ pathToChain, deviceIndex }), new OmnisphereFMTracking({ pathToChain, deviceIndex }), new OmnisphereFMFreq({ pathToChain, deviceIndex })]

        super(pageIndex, 'FM', parameters)
    }
}
