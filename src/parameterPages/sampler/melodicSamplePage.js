import { SamplePage } from './samplePage'
import { SamplerMelodicCategory } from '../../parameters/sampler/melodicCategory'
import { SamplerMelodicSelect } from '../../parameters/sampler/melodicSelect'

export class MelodicSamplePage extends SamplePage {
    constructor(pageIndex, pathToChain, deviceIndex, categories, samples) {
        super(pageIndex, pathToChain, deviceIndex, categories, samples, SamplerMelodicCategory, SamplerMelodicSelect)
    }
}
