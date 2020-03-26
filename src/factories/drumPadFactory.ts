import { ChainMute } from '~/parameters/chain/mute'
import { DrumPad } from '~/models/drumPad'
import RackType from '~/constants/rackType'
import { createInstrumentRack } from '~/factories/instrumentRackFactory'

export function createDrumPads(samplesFolder: string, pathToDrumRack: string) {
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)

        if (drumPadApi.get('chains')[1]) {
            const pathToChain = `${pathToDrumPad} chains 0`
            const muteParameter = new ChainMute({ pathToChain })
            const pathToRack = `${pathToChain} devices 0`
            const instrumentRack = createInstrumentRack(RackType.DRUM, samplesFolder, pathToRack)

            if (instrumentRack) {
                const drumPad = new DrumPad(parseInt(drumPadApi.id), instrumentRack, muteParameter)

                drumPads.push(drumPad)
            }
        }
    }

    return drumPads
}
