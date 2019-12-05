import { DrumPad } from '../models/drumPad'
import createInstrumentRack from './instrumentRackFactory'
import { createParameter } from './parameterFactory'

export function createDrumPads(samplesFolder, pathToDrumRack) {
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)
        const drumPadName = drumPadApi.get('name').toString()

        if (!drumPadName.startsWith('^') && drumPadApi.get('chains')[1]) {
            const pathToInstrumentRack = pathToDrumPad + ' chains 0 devices 0'
            const instrumentRack = createInstrumentRack(samplesFolder, pathToInstrumentRack)
            const muteParameter = createParameter('Chain', 'Mute', pathToDrumPad)
            const drumPad = new DrumPad(parseInt(drumPadApi.id), instrumentRack, muteParameter)

            drumPads.push(drumPad)
        }
    }

    return drumPads
}
