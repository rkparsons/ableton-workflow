import { SamplerDetune } from '../../parameters/sampler/detune'
import { SamplerPitch } from '../../parameters/sampler/pitch'
import { SamplerPitchEnv } from '../../parameters/sampler/pitchEnv'
import { SamplerPitchEnvAttack } from '../../parameters/sampler/pitchEnvAttack'
import { SamplerPitchEnvDecay } from '../../parameters/sampler/pitchEnvDecay'
import { SamplerSpread } from '../../parameters/sampler/spread'

export default {
    name: 'Pitch',
    parameters: [SamplerPitch, SamplerDetune, SamplerSpread, SamplerPitchEnv, SamplerPitchEnvAttack, SamplerPitchEnvDecay],
}
