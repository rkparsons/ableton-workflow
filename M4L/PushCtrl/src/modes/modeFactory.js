import { LayerFxMode } from './layerFxMode'
import { LayerParamsMode } from './layerParamsMode'
import { PadFxMode } from './padFxMode'
import { PadMixerMode } from './padMixerMode'
import { RackFxMode } from './rackFxMode'
import { RackMixerMode } from './rackMixerMode'
import { InactiveMode } from './inactiveMode'

export function createModes(drumRack, controlSurface) {
    // todo: dynamic creation via reflection
    return [
        new InactiveMode(drumRack, controlSurface),
        new RackMixerMode(drumRack, controlSurface),
        new RackFxMode(drumRack, controlSurface),
        new PadMixerMode(drumRack, controlSurface),
        new PadFxMode(drumRack, controlSurface),
        new LayerParamsMode(drumRack, controlSurface),
        new LayerFxMode(drumRack, controlSurface),
    ]
}
