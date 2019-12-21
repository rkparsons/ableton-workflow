import { getCategories, getSampleGroups } from '../util/fileSystem'

import { AmplifierPage } from '../parameterPages/sampler/amplifierPage'
import { FilterPage } from '../parameterPages/sampler/filterPage'
import { OscillatorPage } from '../parameterPages/sampler/oscillatorPage'
import { PanningPage } from '../parameterPages/mixer/panningPage'
import { PitchPage } from '../parameterPages/sampler/pitchPage'
import { RandomPage } from '../parameterPages/sampler/randomPage'
import { SamplePage } from '../parameterPages/sampler/samplePage'
import { TonePage } from '../parameterPages/sampler/tonePage'
import { VelocityPage } from '../parameterPages/sampler/velocityPage'
import { VolumePage } from '../parameterPages/mixer/volumePage'

// todo: get rid of object wrapper
// todo: separate files per type
export const createParameterPages = {
    Mixer: (pathToRack, chainCount) => {
        return [new VolumePage(0, pathToRack, chainCount), new PanningPage(1, pathToRack, chainCount)]
    },

    Sampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        const categories = getCategories(samplesFolder, instrumentRackName, chainName)
        const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)

        return [
            new SamplePage(0, pathToChain, deviceIndex, categories, samples),
            new AmplifierPage(1, pathToChain, deviceIndex),
            new PitchPage(2, pathToChain, deviceIndex),
            new FilterPage(3, pathToChain, deviceIndex),
            new TonePage(4, pathToChain, deviceIndex),
            new OscillatorPage(5, pathToChain, deviceIndex),
            new VelocityPage(6, pathToChain, deviceIndex),
            new RandomPage(7, pathToChain, deviceIndex),
        ]
    },
}
