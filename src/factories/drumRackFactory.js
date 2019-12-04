import { DrumRack } from '../models/drumRack'
import { createDrumPads } from './drumPadFactory'
import { createMixerPages } from './parameterPageFactory'

export function createDrumRack(samplesFolder, drumTrackIndex) {
    const pathToDrumRack = `live_set tracks ${drumTrackIndex} devices 0`
    const drumPads = createDrumPads(samplesFolder, pathToDrumRack)
    const mixerPages = createMixerPages(pathToDrumRack, drumPads.length)

    return new DrumRack(pathToDrumRack, drumPads, mixerPages)
}
