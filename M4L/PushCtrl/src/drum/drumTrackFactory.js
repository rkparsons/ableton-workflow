import { DrumTrack } from './drumTrack'
import { createDrumRack } from './drumRackFactory'
import { createControlSurface } from '../controlSurface/controlSurfaceFactory'
import { pushTapTempoControl } from '../constants'
import { LayerFxMode } from '../modes/layerFxMode'
import { LayerParamsMode } from '../modes/layerParamsMode'
import { PadFxMode } from '../modes/padFxMode'
import { PadMixerMode } from '../modes/padMixerMode'
import { RackFxMode } from '../modes/rackFxMode'
import { RackMixerMode } from '../modes/rackMixerMode'
import { InactiveMode } from '../modes/inactiveMode'

export default function(samplesFolder) {
    const controlSurface = createControlSurface(pushTapTempoControl)
    const drumRack = createDrumRack(samplesFolder)

    // todo: automate creation of all modes
    const modes = [
        new InactiveMode(drumRack, controlSurface),
        new RackMixerMode(drumRack, controlSurface),
        new RackFxMode(drumRack, controlSurface),
        new PadMixerMode(drumRack, controlSurface),
        new PadFxMode(drumRack, controlSurface),
        new LayerParamsMode(drumRack, controlSurface),
        new LayerFxMode(drumRack, controlSurface),
    ]

    return new DrumTrack(drumRack, controlSurface, modes)
}
