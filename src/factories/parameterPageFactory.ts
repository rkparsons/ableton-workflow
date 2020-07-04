import { DrumSamplePage } from '~/parameterPages/sampler/drumSamplePage'
import { MelodicSamplePage } from '~/parameterPages/sampler/melodicSamplePage'
import { PanningPage } from '~/parameterPages/mixer/panningPage'
import { VolumePage } from '~/parameterPages/mixer/volumePage'
import createCollisionPages from './collisionPageFactory'
import createOmnispherePages from './omnispherePageFactory'
import createSamplePages from './samplerPageFactory'

// todo: get rid of object wrapper

export const createParameterPages: any = {
    Mixer: (pathToRack: string, chainCount: number) => {
        return [new VolumePage(0, pathToRack, chainCount), new PanningPage(1, pathToRack, chainCount)]
    },

    DrumSampler: (samplesFolder: string, instrumentRackName: string, chainName: string, pathToChain: string, deviceIndex: number) => {
        return createSamplePages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, DrumSamplePage)
    },

    MelodicSampler: (samplesFolder: string, instrumentRackName: string, chainName: string, pathToChain: string, deviceIndex: number) => {
        return createSamplePages(samplesFolder, instrumentRackName, chainName, pathToChain, deviceIndex, MelodicSamplePage)
    },

    Collision: (samplesFolder: string, instrumentRackName: string, chainName: string, pathToChain: string, deviceIndex: number) => {
        return createCollisionPages(pathToChain, deviceIndex)
    },

    Omnisphere: (samplesFolder: string, instrumentRackName: string, chainName: string, pathToChain: string, deviceIndex: number) => {
        return createOmnispherePages(pathToChain, deviceIndex)
    },
}
