import { ChainMute } from '../parameters/chain/mute'
import { DrumPad } from '../models/drumPad'
import { createInstrumentRack } from './instrumentRackFactory'

export function createDrumPads(samplesFolder, pathToDrumRack) {
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)
        const drumPadName = drumPadApi.get('name').toString()

        if (!drumPadName.startsWith('^') && drumPadApi.get('chains')[1]) {
            const pathToChain = `${pathToDrumPad} chains 0`
            const muteParameter = new ChainMute({ pathToChain })

            const pathToRack = `${pathToChain} devices 0`
            const instrumentRack = createInstrumentRack('Drum', samplesFolder, pathToRack)
            const drumPad = new DrumPad(parseInt(drumPadApi.id), instrumentRack, muteParameter)

            drumPads.push(drumPad)
        }
    }

    return drumPads
}
