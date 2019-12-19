import { SamplerOscEnvAttack } from '../../parameters/sampler/oscEnvAttack'
import { SamplerOscEnvDecay } from '../../parameters/sampler/oscEnvDecay'
import { SamplerOscFreq } from '../../parameters/sampler/oscFreq'
import { SamplerOscLevel } from '../../parameters/sampler/oscLevel'
import { SamplerOscMulti } from '../../parameters/sampler/oscMulti'
import { SamplerOscWave } from '../../parameters/sampler/oscWave'

export default {
    name: 'Osc',
    parameters: [SamplerOscLevel, SamplerOscWave, SamplerOscFreq, SamplerOscMulti, SamplerOscEnvAttack, SamplerOscEnvDecay],
}
