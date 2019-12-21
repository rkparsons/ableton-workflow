import { ParameterPage } from '../../models/parameterPage'
import { SamplerDetune } from '../../parameters/sampler/detune'
import { SamplerPitch } from '../../parameters/sampler/pitch'
import { SamplerPitchEnv } from '../../parameters/sampler/pitchEnv'
import { SamplerPitchEnvAttack } from '../../parameters/sampler/pitchEnvAttack'
import { SamplerPitchEnvDecay } from '../../parameters/sampler/pitchEnvDecay'
import { SamplerSpread } from '../../parameters/sampler/spread'

export class PitchPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new SamplerPitch({ pathToChain, deviceIndex }),
            new SamplerDetune({ pathToChain, deviceIndex }),
            new SamplerSpread({ pathToChain, deviceIndex }),
            new SamplerPitchEnv({ pathToChain, deviceIndex }),
            new SamplerPitchEnvAttack({ pathToChain, deviceIndex }),
            new SamplerPitchEnvDecay({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Pitch', parameters)
    }
}
