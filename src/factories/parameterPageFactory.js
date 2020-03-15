import { getCategories, getSampleGroups } from '../util/fileSystem'

import { AmplifierPage } from '../parameterPages/sampler/amplifierPage'
import { DrumSamplePage } from '../parameterPages/sampler/drumSamplePage'
import { FilterPage } from '../parameterPages/sampler/filterPage'
import { MalletPage } from '../parameterPages/collision/malletPage'
import { MelodicSamplePage } from '../parameterPages/sampler/melodicSamplePage'
import { MixerPage } from '../parameterPages/collision/mixerPage'
import { NoiseEnvPage } from '../parameterPages/collision/noiseEnvPage'
import { NoisePage } from '../parameterPages/collision/noisePage'
import { OscillatorPage } from '../parameterPages/sampler/oscillatorPage'
import { PanningPage } from '../parameterPages/mixer/panningPage'
import { PitchPage } from '../parameterPages/sampler/pitchPage'
import { RandomPage } from '../parameterPages/sampler/randomPage'
import { Reso1aPage } from '../parameterPages/collision/reso1aPage'
import { Reso1bPage } from '../parameterPages/collision/reso1bPage'
import { Reso1cPage } from '../parameterPages/collision/reso1cPage'
import { TonePage } from '../parameterPages/sampler/tonePage'
import { VelocityPage } from '../parameterPages/sampler/velocityPage'
import { VolumePage } from '../parameterPages/mixer/volumePage'

// todo: get rid of object wrapper
// todo: separate files per type
export const createParameterPages = {
    Mixer: (pathToRack, chainCount) => {
        return [new VolumePage(0, pathToRack, chainCount), new PanningPage(1, pathToRack, chainCount)]
    },

    DrumSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        return Sampler(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, DrumSamplePage)
    },

    MelodicSampler: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        return Sampler(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, MelodicSamplePage)
    },

    Collision: (samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex) => {
        return Collision(pathToChain, deviceIndex)
    },
}

function Sampler(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, SamplePageType) {
    const categories = getCategories(samplesFolder, instrumentRackName, chainName)
    const samples = getSampleGroups(samplesFolder, instrumentRackName, chainName, categories)

    return [
        new SamplePageType(0, pathToChain, deviceIndex, categories, samples),
        new AmplifierPage(1, pathToChain, deviceIndex),
        new PitchPage(2, pathToChain, deviceIndex),
        new FilterPage(3, pathToChain, deviceIndex),
        new TonePage(4, pathToChain, deviceIndex),
        new OscillatorPage(5, pathToChain, deviceIndex),
        new VelocityPage(6, pathToChain, deviceIndex),
        new RandomPage(7, pathToChain, deviceIndex),
    ]
}

function Collision(pathToChain, deviceIndex) {
    return [
        new MalletPage(0, pathToChain, deviceIndex),
        new NoisePage(1, pathToChain, deviceIndex),
        new NoiseEnvPage(2, pathToChain, deviceIndex),
        new MixerPage(3, pathToChain, deviceIndex),
        new Reso1aPage(4, pathToChain, deviceIndex),
        new Reso1bPage(5, pathToChain, deviceIndex),
        new Reso1cPage(6, pathToChain, deviceIndex),
    ]
}
