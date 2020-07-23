import { Blank } from '~/parameters/blank'
import { OmnisphereFilter1Freq } from '~/parameters/omnisphere/filter1Freq'
import { OmnisphereFilter1On } from '~/parameters/omnisphere/filter1On'
import { OmnisphereFilter1Res } from '~/parameters/omnisphere/filter1Res'
import { OmnisphereFilter1Variant } from '~/parameters/omnisphere/filter1Variant'
import { OmnisphereFilter2Freq } from '~/parameters/omnisphere/filter2Freq'
import { OmnisphereFilter2On } from '~/parameters/omnisphere/filter2On'
import { OmnisphereFilter2Res } from '~/parameters/omnisphere/filter2Res'
import { OmnisphereFilter2Variant } from '~/parameters/omnisphere/filter2Variant'
import { OmnisphereFilterEnv } from '~/parameters/omnisphere/filterEnv'
import { OmnisphereFilterEnvAttack } from '~/parameters/omnisphere/filterEnvAttack'
import { OmnisphereFilterEnvDecay } from '~/parameters/omnisphere/filterEnvDecay'
import { OmnisphereFilterEnvRelease } from '~/parameters/omnisphere/filterEnvRelease'
import { OmnisphereFilterEnvSustain } from '~/parameters/omnisphere/filterEnvSustain'
import { OmnisphereFilterLFOCutoff } from '~/parameters/omnisphere/filterLFOCutoff'
import { OmnisphereFilterLFOFreq } from '~/parameters/omnisphere/filterLFOFreq'
import { OmnisphereFilterLFOVariant } from '~/parameters/omnisphere/filterLFOVariant'
import { ParameterPage } from '~/models/parameterPage'

export class FilterPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereFilter1On({ pathToChain, deviceIndex }),
            new OmnisphereFilter1Freq({ pathToChain, deviceIndex }),
            new OmnisphereFilter1Res({ pathToChain, deviceIndex }),
            new OmnisphereFilter1Variant({ pathToChain, deviceIndex }),
            new OmnisphereFilter2On({ pathToChain, deviceIndex }),
            new OmnisphereFilter2Freq({ pathToChain, deviceIndex }),
            new OmnisphereFilter2Res({ pathToChain, deviceIndex }),
            new OmnisphereFilter2Variant({ pathToChain, deviceIndex }),

            new OmnisphereFilterLFOFreq({ pathToChain, deviceIndex }),
            new OmnisphereFilterLFOCutoff({ pathToChain, deviceIndex }),
            new OmnisphereFilterLFOVariant({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnv({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvAttack({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvDecay({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvSustain({ pathToChain, deviceIndex }),
            new OmnisphereFilterEnvRelease({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Filter', parameters)
    }
}
