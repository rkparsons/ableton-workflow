import { createParameterPages } from './parameterPageFactory'

export const createDevice = {
    Instrument: {
        Sampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
            return createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, 'Sampler')
        },

        BreakSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
            return createParameterPages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, 'BreakSampler')
        },
    },

    MidiEffect: {},

    AudioEffect: {},
}
