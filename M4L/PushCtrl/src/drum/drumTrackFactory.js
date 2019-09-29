import { DrumTrack } from './drumTrack'
import { createDrumRack } from './drumRackFactory'
import { createControlSurface } from '../controlSurface/controlSurfaceFactory'
import { pushTapTempoControl } from '../constants'

export default function(samplesFolder) {
    const controlSurface = createControlSurface(pushTapTempoControl)
    const drumRack = createDrumRack(samplesFolder)

    return new DrumTrack(drumRack, controlSurface)
}
