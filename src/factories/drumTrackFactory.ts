import { ControlSurface } from '~/models/controlSurface'
import { DrumTrack } from '~/models/drumTrack'
import { createDrumRack } from '~/factories/drumRackFactory'
import { createDrumRackModes } from '~/factories/modeFactory'
import path from 'path'

export default function(controlSurface: ControlSurface, basePath: string, drumSamplesDirectory: string, drumTrackIndex: number) {
    const pathToDrumSamples = path.join(basePath, drumSamplesDirectory)
    const drumRack = createDrumRack(pathToDrumSamples, drumTrackIndex)
    const modes = createDrumRackModes(drumRack, controlSurface)
    const drumTrack = new DrumTrack(modes, drumTrackIndex)

    // todo: remove this coupling from rack to track
    drumRack.setTrack(drumTrack)

    drumRack.onValueChanged(() => {
        drumTrack.getMode().updateDisplay()
    })
    drumRack.onDrumPadSelected(([property, , drumPadId]) => drumTrack.getMode().focusDrumPad(property, drumPadId))

    drumTrack.initialise()

    return drumTrack
}
