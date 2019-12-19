import { ParameterPage } from '../models/parameterPage'
import amplifier from '../parameterPages/sampler/amplifier'
import filter from '../parameterPages/sampler/filter'
import oscillator from '../parameterPages/sampler/oscillator'
import pitch from '../parameterPages/sampler/pitch'
import random from '../parameterPages/sampler/random'
import sample from '../parameterPages/sampler/sample'
import tone from '../parameterPages/sampler/tone'
import velocity from '../parameterPages/sampler/velocity'

export class Sampler {
    constructor(pathToChain, deviceIndex, categories, samples) {
        this.pathToChain = pathToChain
        this.deviceIndex = deviceIndex
        this.categories = categories
        this.samples = samples

        this.pages = [sample, amplifier, pitch, filter, tone, oscillator, velocity, random]
    }

    getParameterPages() {
        return this.pages.map((page, index) => {
            const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain: this.pathToChain, deviceIndex: this.deviceIndex, options: this.categories, optionGroups: this.samples }))

            return new ParameterPage(index, page.name, parameters)
        })
    }
}
