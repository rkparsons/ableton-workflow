import { CCStart } from '../../parameters/cc/start'
import { ChainSolo } from '../../parameters/chain/solo'
import { ParameterPage } from '../../models/parameterPage'
import { SamplerCategory } from '../../parameters/sampler/category'
import { SamplerRepitch } from '../../parameters/sampler/repitch'
import { SamplerReverse } from '../../parameters/sampler/reverse'
import { SamplerSelect } from '../../parameters/sampler/select'

export class SamplePage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex, categories, samples) {
        const parameters = [
            new SamplerCategory({ pathToChain, deviceIndex, options: categories }),
            new SamplerSelect({ pathToChain, deviceIndex, optionGroups: samples }),
            new CCStart({ pathToChain, deviceIndex }),
            new SamplerReverse({ pathToChain, deviceIndex }),
            new ChainSolo({ pathToChain, deviceIndex }),
            new SamplerRepitch({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Sample', parameters)
    }

    handleParameterChange(i, callback) {
        const parameter = this.getParameter(i)

        if (parameter.isCategory) {
            this.filterSampleParameter(parameter)
            this.warpRepitchParameter(parameter)
        }

        super.handleParameterChange(i, callback)
    }

    filterSampleParameter(categoryParameter) {
        this.getParameters()
            .find(parameter => parameter.isSample)
            .filterOptions(categoryParameter.getDisplayValue())
    }

    warpRepitchParameter(categoryParameter) {
        const sampleBpm = Number(categoryParameter.getDisplayValue().split('#')[1])

        if (sampleBpm) {
            this.getParameters()
                .find(parameter => parameter.isRepitchWarp)
                .warpToSampleBpm(sampleBpm)
        }
    }
}
