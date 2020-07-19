import { OmnisphereFilter1Freq } from '~/parameters/omnisphere/filter1Freq'
import { OmnisphereFilter1Res } from '~/parameters/omnisphere/filter1Res'
import { OmnisphereFilter1Variant } from '~/parameters/omnisphere/filter1Variant'
import { OmnisphereFilter2Freq } from '~/parameters/omnisphere/filter2Freq'
import { OmnisphereFilter2Res } from '~/parameters/omnisphere/filter2Res'
import { OmnisphereFilter2Variant } from '~/parameters/omnisphere/filter2Variant'
import { OmnisphereFilterEnv } from '~/parameters/omnisphere/filterEnv'
import { OmnisphereFilterEnvAttack } from '~/parameters/omnisphere/filterEnvAttack'
import { OmnisphereFilterEnvDecay } from '~/parameters/omnisphere/filterEnvDecay'
import { OmnisphereFilterEnvRelease } from '~/parameters/omnisphere/filterEnvRelease'
import { OmnisphereFilterEnvSustain } from '~/parameters/omnisphere/filterEnvSustain'
import { OmnisphereFilterFreq } from '~/parameters/omnisphere/filterFreq'
import { OmnisphereFilterGain } from '~/parameters/omnisphere/filterGain'
import { OmnisphereFilterMix } from '~/parameters/omnisphere/filterMix'
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
            new OmnisphereFilterGain({ pathToChain, deviceIndex }),
            new OmnisphereFilter1Freq({ pathToChain, deviceIndex }),
            new OmnisphereFilter1Res({ pathToChain, deviceIndex }),
            new OmnisphereFilter1Variant({ pathToChain, deviceIndex }),
            new OmnisphereFilterMix({ pathToChain, deviceIndex }),
            new OmnisphereFilter2Freq({ pathToChain, deviceIndex }),
            new OmnisphereFilter2Res({ pathToChain, deviceIndex }),
            new OmnisphereFilter2Variant({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Filter', parameters)
    }
}
