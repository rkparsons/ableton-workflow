import { ChainFxMode } from '../uiModes/chainFxMode'
import { ChainParamsMode } from '../uiModes/chainParamsMode'
import { InactiveMode } from '../uiModes/inactiveMode'
import { PadFxMode } from '../uiModes/padFxMode'
import { PadMixerMode } from '../uiModes/padMixerMode'
import { RackFxMode } from '../uiModes/rackFxMode'
import { RackMixerMode } from '../uiModes/rackMixerMode'

export function createModes(drumRack, controlSurface) {
    // todo: dynamic creation via reflection
    return [
        new InactiveMode(drumRack, controlSurface),
        new ChainParamsMode(drumRack, controlSurface),
        new ChainFxMode(drumRack, controlSurface),
        new PadMixerMode(drumRack, controlSurface),
        new PadFxMode(drumRack, controlSurface),
        new RackMixerMode(drumRack, controlSurface),
        new RackFxMode(drumRack, controlSurface),
    ]
}
