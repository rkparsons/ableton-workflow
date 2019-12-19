import { DrumRack } from '../models/drumRack'
import { createDevice } from './deviceFactory'
import { createDrumPads } from './drumPadFactory'

export function createDrumRack(samplesFolder, drumTrackIndex) {
    const pathToDrumRack = `live_set tracks ${drumTrackIndex} devices 0`
    const drumPads = createDrumPads(samplesFolder, pathToDrumRack)
    const mixerPages = createDevice['Mixer'](pathToDrumRack, drumPads.length)

    return new DrumRack(pathToDrumRack, drumPads, mixerPages)
}
