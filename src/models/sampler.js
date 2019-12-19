import { ParameterPage } from '../models/parameterPage'

export class Sampler {
    constructor(pathToChain, deviceIndex, categories, samples, pages) {
        this.pathToChain = pathToChain
        this.deviceIndex = deviceIndex
        this.categories = categories
        this.samples = samples
        this.pages = pages
    }

    getParameterPages() {
        return this.pages.map((page, index) => {
            const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain: this.pathToChain, deviceIndex: this.deviceIndex, options: this.categories, optionGroups: this.samples }))

            return new ParameterPage(index, page.name, parameters)
        })
    }
}
