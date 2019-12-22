import { CCStart } from '../../parameters/cc/start'
import { ChainSolo } from '../../parameters/chain/solo'
import { SamplePage } from './samplePage'
import { SamplerDrumCategory } from '../../parameters/sampler/drumCategory'
import { SamplerDrumSelect } from '../../parameters/sampler/drumSelect'
import { SamplerRepitch } from '../../parameters/sampler/repitch'
import { SamplerReverse } from '../../parameters/sampler/reverse'

export class DrumSamplePage extends SamplePage {
    constructor(pageIndex, pathToChain, deviceIndex, categories, samples) {
        const parameters = [
            new SamplerDrumCategory({ pathToChain, deviceIndex, options: categories }),
            new SamplerDrumSelect({ pathToChain, deviceIndex, optionGroups: samples }),
            new CCStart({ pathToChain, deviceIndex }),
            new SamplerReverse({ pathToChain, deviceIndex }),
            new ChainSolo({ pathToChain, deviceIndex }),
            new SamplerRepitch({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, parameters)
    }
}
