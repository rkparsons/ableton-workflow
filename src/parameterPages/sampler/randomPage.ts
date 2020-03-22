import { CCStartRandom } from '~/parameters/cc/startRandom'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerFilterLfo } from '~/parameters/sampler/filterLfo'
import { SamplerPanLfo } from '~/parameters/sampler/panLfo'
import { SamplerPitchLfo } from '~/parameters/sampler/pitchLfo'
import { SamplerVolumeLfo } from '~/parameters/sampler/volumeLfo'

export class RandomPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new SamplerVolumeLfo({ pathToChain, deviceIndex }),
            new SamplerPitchLfo({ pathToChain, deviceIndex }),
            new SamplerFilterLfo({ pathToChain, deviceIndex }),
            new SamplerPanLfo({ pathToChain, deviceIndex }),
            new CCStartRandom({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Rand', parameters)
    }
}
