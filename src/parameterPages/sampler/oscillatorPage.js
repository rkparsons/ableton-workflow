import { ParameterPage } from '../../models/parameterPage'
import { SamplerOscEnvAttack } from '../../parameters/sampler/oscEnvAttack'
import { SamplerOscEnvDecay } from '../../parameters/sampler/oscEnvDecay'
import { SamplerOscFreq } from '../../parameters/sampler/oscFreq'
import { SamplerOscLevel } from '../../parameters/sampler/oscLevel'
import { SamplerOscMulti } from '../../parameters/sampler/oscMulti'
import { SamplerOscWave } from '../../parameters/sampler/oscWave'

export class OscillatorPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new SamplerOscLevel({ pathToChain, deviceIndex }),
            new SamplerOscWave({ pathToChain, deviceIndex }),
            new SamplerOscFreq({ pathToChain, deviceIndex }),
            new SamplerOscMulti({ pathToChain, deviceIndex }),
            new SamplerOscEnvAttack({ pathToChain, deviceIndex }),
            new SamplerOscEnvDecay({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Osc', parameters)
    }
}
