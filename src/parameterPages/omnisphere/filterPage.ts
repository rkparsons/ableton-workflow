import { OmnisphereFilterEnv } from '~/parameters/omnisphere/filterEnv'
import { OmnisphereFilterEnvAttack } from '~/parameters/omnisphere/filterEnvAttack'
import { OmnisphereFilterEnvDecay } from '~/parameters/omnisphere/filterEnvDecay'
import { OmnisphereFilterEnvRelease } from '~/parameters/omnisphere/filterEnvRelease'
import { OmnisphereFilterEnvSustain } from '~/parameters/omnisphere/filterEnvSustain'
import { OmnisphereFilterFreq } from '~/parameters/omnisphere/filterFreq'
import { OmnisphereFilterRes } from '~/parameters/omnisphere/filterRes'
import { OmnisphereFilterVariant } from '~/parameters/omnisphere/filterVariant'
import { ParameterPage } from '~/models/parameterPage'

export class FilterPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereFilterFreq({ pathToChain, deviceIndex }),
            new OmnisphereFilterRes({ pathToChain, deviceIndex }),
            new OmnisphereFilterVariant({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnv({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvAttack({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvDecay({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvSustain({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvRelease({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Filter', parameters)
    }
}
