import { DrumRack } from './drumRack'
import { createDrumPads } from './drumPadFactory'
import { createMixerPages } from '../parameter/parameterPageFactory'

export function createDrumRack(samplesFolder) {
    const pathToDrumRack = 'this_device canonical_parent devices 1'
    const result = createDrumPads(samplesFolder, pathToDrumRack)
    const pagesResult = createMixerPages(pathToDrumRack, Object.keys(result.drumPads).length)

    return new DrumRack(pathToDrumRack, result.drumPads, result.drumPadNames, pagesResult.mixerPages, pagesResult.mixerPageNames)
}
