import { getCategories, getSampleGroups } from '~/util/fileSystem'

import { AmplifierPage } from '~/parameterPages/sampler/amplifierPage'
import { DrumSamplePage } from '~/parameterPages/sampler/drumSamplePage'
import { FilterPage } from '~/parameterPages/sampler/filterPage'
import { MelodicSamplePage } from '~/parameterPages/sampler/melodicSamplePage'
import { OscillatorPage } from '~/parameterPages/sampler/oscillatorPage'
import { PitchPage } from '~/parameterPages/sampler/pitchPage'
import { RandomPage } from '~/parameterPages/sampler/randomPage'
import { TonePage } from '~/parameterPages/sampler/tonePage'
import { VelocityPage } from '~/parameterPages/sampler/velocityPage'

export default function (
    samplesFolder: string,
    instrumentRackName: string,
    chainName: string,
    pathToChain: string,
    deviceIndex: number,
    SamplePageType: typeof DrumSamplePage | typeof MelodicSamplePage
) {
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
