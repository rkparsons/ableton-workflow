import { OmnisphereAMAmount } from '~/parameters/omnisphere/amAmount'
import { OmnisphereAMFreq } from '~/parameters/omnisphere/amFreq'
import { OmnisphereAMOn } from '~/parameters/omnisphere/amOn'
import { OmnisphereAMScale } from '~/parameters/omnisphere/amScale'
import { OmnisphereAMShape } from '~/parameters/omnisphere/amShape'
import { OmnisphereAMSymmetry } from '~/parameters/omnisphere/amSymmetry'
import { OmnisphereAMSync } from '~/parameters/omnisphere/amSync'
import { OmnisphereAMTracking } from '~/parameters/omnisphere/amTracking'
import { ParameterPage } from '~/models/parameterPage'

export class AMPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereAMOn({ pathToChain, deviceIndex }),
            new OmnisphereAMTracking({ pathToChain, deviceIndex }),
            new OmnisphereAMFreq({ pathToChain, deviceIndex }),
            new OmnisphereAMAmount({ pathToChain, deviceIndex }),
            new OmnisphereAMScale({ pathToChain, deviceIndex }),
            new OmnisphereAMShape({ pathToChain, deviceIndex }),
            new OmnisphereAMSymmetry({ pathToChain, deviceIndex }),
            new OmnisphereAMSync({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'AM', parameters)
    }
}
