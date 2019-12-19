import { getCategories, getSampleGroups } from '../util/fileSystem'

import { Sampler } from '../models/sampler'

export const createDevice = {
    Instrument: {
        Sampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
            const categories = getCategories(samplesFolder, instrumentRackName, chainName)
            const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)

            // todo: return sampler not just pages
            return new Sampler(pathToChain, deviceIndex, categories, samples).getParameterPages()
        },

        // BreakSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        //     return createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, 'BreakSampler')
        // },
    },

    MidiEffect: {},

    AudioEffect: {},
}
