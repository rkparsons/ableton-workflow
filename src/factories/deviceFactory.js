import { getCategories, getSampleGroups } from '../util/fileSystem'

import { Sampler } from '../models/sampler'
import amplifier from '../parameterPages/sampler/amplifier'
import filter from '../parameterPages/sampler/filter'
import oscillator from '../parameterPages/sampler/oscillator'
import pitch from '../parameterPages/sampler/pitch'
import random from '../parameterPages/sampler/random'
import sample from '../parameterPages/sampler/sample'
import tone from '../parameterPages/sampler/tone'
import velocity from '../parameterPages/sampler/velocity'

export const createDevice = {
    Instrument: {
        Sampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
            const categories = getCategories(samplesFolder, instrumentRackName, chainName)
            const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)
            const pages = [sample, amplifier, pitch, filter, tone, oscillator, velocity, random]

            // todo: return sampler not just pages
            return new Sampler(pathToChain, deviceIndex, categories, samples, pages).getParameterPages()
        },

        // BreakSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        //     return createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, 'BreakSampler')
        // },
    },

    MidiEffect: {},

    AudioEffect: {},
}
