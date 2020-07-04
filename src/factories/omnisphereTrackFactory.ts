import { ControlSurface } from '~/models/controlSurface'
import { InstrumentTrack } from '~/models/instrumentTrack'
import RackType from '~/constants/rackType'
import { createInstrumentRack } from '~/factories/instrumentRackFactory'
import { createInstrumentRackModes } from '~/factories/modeFactory'

export default function (controlSurface: ControlSurface, omniTrackIndex: number) {
    const pathToInstrumentRack = `live_set tracks ${omniTrackIndex} devices 0`
    const instrumentRack = createInstrumentRack(RackType.MELODIC, '', pathToInstrumentRack)

    if (!instrumentRack) {
        return
    }

    const modes = createInstrumentRackModes(instrumentRack, controlSurface)
    const instrumentTrack = new InstrumentTrack(modes, omniTrackIndex)

    instrumentRack.onValueChanged(() => {
        instrumentTrack.getMode().updateDisplay()
    })

    instrumentTrack.initialise()

    return instrumentTrack
}
