import { SamplerFilterEnv } from '../../parameters/sampler/filterEnv'
import { SamplerFilterEnvAttack } from '../../parameters/sampler/filterEnvAttack'
import { SamplerFilterEnvDecay } from '../../parameters/sampler/filterEnvDecay'
import { SamplerFilterFreq } from '../../parameters/sampler/filterFreq'
import { SamplerFilterRes } from '../../parameters/sampler/filterRes'
import { SamplerFilterType } from '../../parameters/sampler/filterType'

export default {
    name: 'Filter',
    parameters: [SamplerFilterType, SamplerFilterFreq, SamplerFilterRes, SamplerFilterEnv, SamplerFilterEnvAttack, SamplerFilterEnvDecay],
}
