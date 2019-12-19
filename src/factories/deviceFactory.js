import { getCategories, getSampleGroups } from '../util/fileSystem'

import { ParameterPage } from '../models/parameterPage'
import amplifier from '../parameterPages/sampler/amplifier'
import filter from '../parameterPages/sampler/filter'
import mixer from '../parameterPages/mixer'
import oscillator from '../parameterPages/sampler/oscillator'
import pitch from '../parameterPages/sampler/pitch'
import random from '../parameterPages/sampler/random'
import sample from '../parameterPages/sampler/sample'
import tone from '../parameterPages/sampler/tone'
import velocity from '../parameterPages/sampler/velocity'

export const createDevice = {
    Mixer: (pathToRack, chainCount) => {
        return mixer.parameters.map(ParameterClass => {
            let parameters = []

            for (let chainIndex = 0; chainIndex < chainCount; chainIndex++) {
                const pathToChain = `${pathToRack} chains ${chainIndex}`

                parameters.push(new ParameterClass({ pathToChain }))
            }

            return new ParameterPage(i, parameters[0].name, parameters)
        })
    },

    Instrument: {
        Sampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
            const categories = getCategories(samplesFolder, instrumentRackName, chainName)
            const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)
            const pages = [sample, amplifier, pitch, filter, tone, oscillator, velocity, random]

            return pages.map((page, index) => {
                const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain, deviceIndex, options: categories, optionGroups: samples }))

                return new ParameterPage(index, page.name, parameters)
            })
        },

        // todo: implement break sampler
        // BreakSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        //     return createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, 'BreakSampler')
        // },
    },

    MidiEffect: {},

    AudioEffect: {},
}
