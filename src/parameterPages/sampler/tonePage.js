import { ParameterPage } from '~/models/parameterPage'
import { SamplerFilterCircuit } from '~/parameters/sampler/filterCircuit'
import { SamplerFilterDrive } from '~/parameters/sampler/filterDrive'
import { SamplerFilterSlope } from '~/parameters/sampler/filterSlope'
import { SamplerShaperLevel } from '~/parameters/sampler/shaperLevel'
import { SamplerShaperPre } from '~/parameters/sampler/shaperPre'
import { SamplerShaperType } from '~/parameters/sampler/shaperType'

export class TonePage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new SamplerFilterCircuit({ pathToChain, deviceIndex }),
            new SamplerFilterSlope({ pathToChain, deviceIndex }),
            new SamplerFilterDrive({ pathToChain, deviceIndex }),
            new SamplerShaperPre({ pathToChain, deviceIndex }),
            new SamplerShaperType({ pathToChain, deviceIndex }),
            new SamplerShaperLevel({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Tone', parameters)
    }
}
