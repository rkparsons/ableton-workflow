import { ParameterPage } from '../models/parameterPage'
import { parameterPageConfig } from '../config/parameterPageConfig'

export class Sampler {
    constructor(pathToChain, deviceIndex, categories, samples) {
        this.parameterPages = parameterPageConfig['Sampler'].map((page, index) => {
            const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain, deviceIndex, options: categories, optionGroups: samples }))

            return new ParameterPage(index, page.name, parameters)
        })
    }

    getParameterPages() {
        return this.parameterPages
    }
}
