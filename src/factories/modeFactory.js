import { ChainFxMode } from '../uiModes/chainFxMode'
import { ChainParamsMode } from '../uiModes/chainParamsMode'
import { DrumRackFxMode } from '../uiModes/drumRackFxMode'
import { DrumRackMixerMode } from '../uiModes/drumRackMixerMode'
import { InactiveMode } from '../uiModes/inactiveMode'
import { InstrumentRackFxMode } from '../uiModes/instrumentRackFxMode'
import { InstrumentRackMixerMode } from '../uiModes/instrumentRackMixerMode'

export function createDrumRackModes(rack, controlSurface) {
    // todo: dynamic creation via reflection
    return [
        new InactiveMode(rack, controlSurface),
        new ChainParamsMode(rack, controlSurface),
        new ChainFxMode(rack, controlSurface),
        new InstrumentRackMixerMode(rack, controlSurface),
        new InstrumentRackFxMode(rack, controlSurface),
        new DrumRackMixerMode(rack, controlSurface),
        new DrumRackFxMode(rack, controlSurface),
    ]
}

export function createInstrumentRackModes(rack, controlSurface) {
    return [new InactiveMode(rack, controlSurface), new ChainParamsMode(rack, controlSurface), new ChainFxMode(rack, controlSurface), new InstrumentRackMixerMode(rack, controlSurface), new InstrumentRackFxMode(rack, controlSurface)]
}
