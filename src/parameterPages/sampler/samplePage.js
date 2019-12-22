import { ParameterPage } from '../../models/parameterPage'

export class SamplePage extends ParameterPage {
    constructor(pageIndex, parameters) {
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
