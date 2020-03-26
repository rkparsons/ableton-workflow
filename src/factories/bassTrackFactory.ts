import { ControlSurface } from '~/models/controlSurface'
import { InstrumentTrack } from '~/models/instrumentTrack'
import RackType from '~/constants/rackType'
import { createInstrumentRack } from '~/factories/instrumentRackFactory'
import { createInstrumentRackModes } from '~/factories/modeFactory'
import path from 'path'

export default function(controlSurface: ControlSurface, basePath: string, bassSamplesDirectory: string, bassTrackIndex: number) {
    const pathToBassSamples = path.join(basePath, bassSamplesDirectory)
    const pathToInstrumentRack = `live_set tracks ${bassTrackIndex} devices 0`
    const instrumentRack = createInstrumentRack(RackType.MELODIC, pathToBassSamples, pathToInstrumentRack)

    if (!instrumentRack) {
        return
    }

    const modes = createInstrumentRackModes(instrumentRack, controlSurface)
    const instrumentTrack = new InstrumentTrack(modes, bassTrackIndex)

    instrumentRack.onValueChanged(() => {
        instrumentTrack.getMode().updateDisplay()
    })

    instrumentTrack.initialise()

    return instrumentTrack
}
