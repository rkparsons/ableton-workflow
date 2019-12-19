import { SamplerAmpAttack } from '../../parameters/sampler/ampAttack'
import { SamplerAmpDecay } from '../../parameters/sampler/ampDecay'
import { SamplerAmpLoop } from '../../parameters/sampler/ampLoop'
import { SamplerAmpRelease } from '../../parameters/sampler/ampRelease'
import { SamplerAmpSustain } from '../../parameters/sampler/ampSustain'
import { SamplerAmpSync } from '../../parameters/sampler/ampSync'

export default {
    name: 'Amp',
    parameters: [SamplerAmpAttack, SamplerAmpDecay, SamplerAmpSustain, SamplerAmpRelease, SamplerAmpLoop, SamplerAmpSync],
}
