import { getCategories, getSampleGroups } from '../util/fileSystem'

import { ParameterPage } from '../models/parameterPage'
import { parameterPageConfig } from '../config/parameterPageConfig'

export const createDevice = {
    Instrument: {
        Sampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
            const categories = getCategories(samplesFolder, instrumentRackName, chainName)
            const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)

            return parameterPageConfig['Sampler'].map((page, index) => {
                const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain, deviceIndex, options: categories, optionGroups: samples }))

                return new ParameterPage(index, page.name, parameters)
            })
        },

        // BreakSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        //     return createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, 'BreakSampler')
        // },
    },

    MidiEffect: {},

    AudioEffect: {},
}
