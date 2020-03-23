import { CCStart } from '~/parameters/cc/start'
import { ChainSolo } from '~/parameters/chain/solo'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerDrumCategory } from '~/parameters/sampler/drumCategory'
import { SamplerDrumSelect } from '~/parameters/sampler/drumSelect'
import { SamplerRepitch } from '~/parameters/sampler/repitch'
import { SamplerReverse } from '~/parameters/sampler/reverse'

export class DrumSamplePage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number, categories: string[], samples: Map<string, string[]>) {
        const parameters = [
            new SamplerDrumCategory({ pathToChain, deviceIndex, options: categories }),
            new SamplerDrumSelect({ pathToChain, deviceIndex, optionGroups: samples }),
            new CCStart({ pathToChain, deviceIndex }),
            new SamplerReverse({ pathToChain, deviceIndex }),
            new ChainSolo({ pathToChain }),
            new SamplerRepitch({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Sample', parameters)
    }

    handleParameterChange(index: number, callback: () => void) {
        const parameter = this.getParameter(index)

        if (parameter instanceof SamplerDrumCategory) {
            this.filterSampleParameter(parameter)
        }

        super.handleParameterChange(index, callback)
    }

    filterSampleParameter(categoryParameter: SamplerDrumCategory) {
        const sampleParameter = this.getParameters().find(parameter => parameter instanceof SamplerDrumSelect) as SamplerDrumSelect

        if (sampleParameter) {
            sampleParameter.filterOptions(categoryParameter.getDisplayValue())
        }
    }
}
