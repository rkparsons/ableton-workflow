import { SamplePage } from './samplePage'
import { SamplerDrumCategory } from '../../parameters/sampler/drumCategory'
import { SamplerDrumSelect } from '../../parameters/sampler/drumSelect'

export class DrumSamplePage extends SamplePage {
    constructor(pageIndex, pathToChain, deviceIndex, categories, samples) {
        super(pageIndex, pathToChain, deviceIndex, categories, samples, SamplerDrumCategory, SamplerDrumSelect)
    }
}
