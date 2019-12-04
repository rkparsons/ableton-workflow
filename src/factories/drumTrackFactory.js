import { DrumTrack } from '../models/drumTrack'
import { createDrumRack } from './drumRackFactory'
import { createModes } from './modeFactory'
import path from 'path'

export default function(controlSurface, pathToSamples, drumTrackIndex) {
    const pathToDrumSamples = path.join(pathToSamples, 'Drum')
    const drumRack = createDrumRack(pathToDrumSamples, drumTrackIndex)
    const modes = createModes(drumRack, controlSurface)
    const drumTrack = new DrumTrack(modes, drumTrackIndex)

    drumRack.onValueChanged(() => {
        drumTrack.getMode().updateDisplay()
    })
    drumRack.onDrumPadSelected(([property, , drumPadId]) => drumTrack.getMode().focusDrumPad(property, drumPadId))

    drumTrack.initialise()

    return drumTrack
}
