import { ParameterPage } from '~/models/parameterPage'

export class SamplePage extends ParameterPage {
    constructor(pageIndex, parameters) {
        super(pageIndex, 'Sample', parameters)
    }

    handleParameterChange(i, callback) {
        const parameter = this.getParameter(i)

        if (parameter.isCategory) {
            this.filterSampleParameter(parameter)
        }

        super.handleParameterChange(i, callback)
    }

    filterSampleParameter(categoryParameter) {
        this.getParameters()
            .find(parameter => parameter.isSample)
            .filterOptions(categoryParameter.getDisplayValue())
    }
}
