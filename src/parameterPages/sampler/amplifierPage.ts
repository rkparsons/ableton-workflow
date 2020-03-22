import { ParameterPage } from '~/models/parameterPage'
import { SamplerAmpAttack } from '~/parameters/sampler/ampAttack'
import { SamplerAmpDecay } from '~/parameters/sampler/ampDecay'
import { SamplerAmpLoop } from '~/parameters/sampler/ampLoop'
import { SamplerAmpRelease } from '~/parameters/sampler/ampRelease'
import { SamplerAmpSustain } from '~/parameters/sampler/ampSustain'
import { SamplerAmpSync } from '~/parameters/sampler/ampSync'

export class AmplifierPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new SamplerAmpAttack({ pathToChain, deviceIndex }),
            new SamplerAmpDecay({ pathToChain, deviceIndex }),
            new SamplerAmpSustain({ pathToChain, deviceIndex }),
            new SamplerAmpRelease({ pathToChain, deviceIndex }),
            new SamplerAmpLoop({ pathToChain, deviceIndex }),
            new SamplerAmpSync({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Amp', parameters)
    }
}
