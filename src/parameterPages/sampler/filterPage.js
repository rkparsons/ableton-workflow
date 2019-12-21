import { ParameterPage } from '../../models/parameterPage'
import { SamplerFilterEnv } from '../../parameters/sampler/filterEnv'
import { SamplerFilterEnvAttack } from '../../parameters/sampler/filterEnvAttack'
import { SamplerFilterEnvDecay } from '../../parameters/sampler/filterEnvDecay'
import { SamplerFilterFreq } from '../../parameters/sampler/filterFreq'
import { SamplerFilterRes } from '../../parameters/sampler/filterRes'
import { SamplerFilterType } from '../../parameters/sampler/filterType'

export class FilterPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new SamplerFilterType({ pathToChain, deviceIndex }),
            new SamplerFilterFreq({ pathToChain, deviceIndex }),
            new SamplerFilterRes({ pathToChain, deviceIndex }),
            new SamplerFilterEnv({ pathToChain, deviceIndex }),
            new SamplerFilterEnvAttack({ pathToChain, deviceIndex }),
            new SamplerFilterEnvDecay({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Filter', parameters)
    }
}
