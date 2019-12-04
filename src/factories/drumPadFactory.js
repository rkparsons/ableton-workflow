import { DrumPad } from '../models/drumPad'
import createInstrumentRack from './instrumentRackFactory'

export function createDrumPads(samplesFolder, pathToDrumRack) {
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)
        const drumPadName = drumPadApi.get('name').toString()

        if (!drumPadName.startsWith('^') && drumPadApi.get('chains')[1]) {
            const pathToInstrumentRack = pathToDrumPad + ' chains 0 devices 0'
            const instrumentRack = createInstrumentRack(samplesFolder, pathToInstrumentRack)
            const drumPad = new DrumPad(parseInt(drumPadApi.id), instrumentRack)

            drumPads.push(drumPad)
        }
    }

    return drumPads
}
