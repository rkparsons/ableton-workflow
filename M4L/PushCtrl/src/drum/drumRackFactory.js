import { DrumRack } from './drumRack'
import { createDrumPads } from './drumPadFactory'
import { createMixerPages } from '../parameter/parameterPageFactory'

export function createDrumRack(samplesFolder) {
    const pathToDrumRack = 'this_device canonical_parent devices 1'
    const drumPads = createDrumPads(samplesFolder, pathToDrumRack)
    const mixerPages = createMixerPages(pathToDrumRack, drumPads.length)

    return new DrumRack(pathToDrumRack, drumPads, mixerPages)
}
