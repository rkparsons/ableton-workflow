import { DrumRack } from '~/models/drumRack'
import { createDrumPads } from '~/factories/drumPadFactory'
import { createParameterPages } from '~/factories/parameterPageFactory'

export function createDrumRack(samplesFolder, drumTrackIndex) {
    const pathToDrumRack = `live_set tracks ${drumTrackIndex} devices 0`
    const drumPads = createDrumPads(samplesFolder, pathToDrumRack)
    const mixerPages = createParameterPages['Mixer'](pathToDrumRack, drumPads.length)

    return new DrumRack(pathToDrumRack, drumPads, mixerPages)
}
