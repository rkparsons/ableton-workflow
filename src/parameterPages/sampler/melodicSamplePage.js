import { CCStart } from '../../parameters/cc/start'
import { ChainSolo } from '../../parameters/chain/solo'
import { SamplePage } from './samplePage'
import { SamplerMelodicCategory } from '../../parameters/sampler/melodicCategory'
import { SamplerMelodicSelect } from '../../parameters/sampler/melodicSelect'
import { SamplerRepitch } from '../../parameters/sampler/repitch'
import { SamplerReverse } from '../../parameters/sampler/reverse'

export class MelodicSamplePage extends SamplePage {
    constructor(pageIndex, pathToChain, deviceIndex, categories, samples) {
        const category = new SamplerMelodicCategory({ pathToChain, deviceIndex, options: categories, optionGroups: samples })
        const parameters = [
            category,
            new SamplerMelodicSelect({ pathToChain, deviceIndex, optionGroups: samples, category }),
            new CCStart({ pathToChain, deviceIndex }),
            new SamplerReverse({ pathToChain, deviceIndex }),
            new ChainSolo({ pathToChain, deviceIndex }),
            new SamplerRepitch({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, parameters)
    }
}
