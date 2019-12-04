import { ChainFxMode } from '../uiModes/chainFxMode'
import { ChainParamsMode } from '../uiModes/chainParamsMode'
import { DrumRackMixerMode } from '../uiModes/drumRackMixerMode'
import { InactiveMode } from '../uiModes/inactiveMode'
import { InstrumentRackFxMode } from '../uiModes/instrumentRackFxMode'
import { InstrumentRackMixerMode } from '../uiModes/instrumentRackMixerMode'
import { RackFxMode } from '../uiModes/rackFxMode'

export function createModes(drumRack, controlSurface) {
    // todo: dynamic creation via reflection
    return [
        new InactiveMode(drumRack, controlSurface),
        new ChainParamsMode(drumRack, controlSurface),
        new ChainFxMode(drumRack, controlSurface),
        new InstrumentRackMixerMode(drumRack, controlSurface),
        new InstrumentRackFxMode(drumRack, controlSurface),
        new DrumRackMixerMode(drumRack, controlSurface),
        new RackFxMode(drumRack, controlSurface),
    ]
}
