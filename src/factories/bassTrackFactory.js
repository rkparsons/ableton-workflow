import { InstrumentTrack } from '../models/instrumentTrack'
import { createInstrumentRack } from './instrumentRackFactory'
import { createInstrumentRackModes } from './modeFactory'
import path from 'path'

export default function(controlSurface, basePath, bassSamplesDirectory, bassTrackIndex) {
    const pathToBassSamples = path.join(basePath, bassSamplesDirectory)
    const pathToInstrumentRack = `live_set tracks ${bassTrackIndex} devices 0`
    const instrumentRack = createInstrumentRack('Melodic', pathToBassSamples, pathToInstrumentRack)

    const modes = createInstrumentRackModes(instrumentRack, controlSurface)
    const instrumentTrack = new InstrumentTrack(modes, bassTrackIndex)

    instrumentRack.onValueChanged(() => {
        instrumentTrack.getMode().updateDisplay()
    })

    instrumentTrack.initialise()

    return instrumentTrack
}
