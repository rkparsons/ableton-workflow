import { CCStart } from '~/parameters/cc/start'
import { ChainSolo } from '~/parameters/chain/solo'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerMelodicCategory } from '~/parameters/sampler/melodicCategory'
import { SamplerMelodicSelect } from '~/parameters/sampler/melodicSelect'
import { SamplerReverse } from '~/parameters/sampler/reverse'

export class MelodicSamplePage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number, categories: string[], samples: Map<string, string[]>) {
        const category = new SamplerMelodicCategory({ pathToChain, deviceIndex, options: categories, optionGroups: samples })
        const parameters = [
            category,
            new SamplerMelodicSelect({ pathToChain, deviceIndex, optionGroups: samples, category }),
            new CCStart({ pathToChain, deviceIndex }),
            new SamplerReverse({ pathToChain, deviceIndex }),
            new ChainSolo({ pathToChain }),
        ]

        super(pageIndex, 'Sample', parameters)
    }

    handleParameterChange(index: number, callback: () => void) {
        const parameter = this.getParameter(index)

        if (parameter instanceof SamplerMelodicCategory) {
            this.filterSampleParameter(parameter)
        }

        super.handleParameterChange(index, callback)
    }

    filterSampleParameter(categoryParameter: SamplerMelodicCategory) {
        const sampleParameter = this.getParameters().find(parameter => parameter instanceof SamplerMelodicSelect) as SamplerMelodicSelect

        if (sampleParameter) {
            sampleParameter.filterOptions(categoryParameter.getDisplayValue())
        }
    }
}
