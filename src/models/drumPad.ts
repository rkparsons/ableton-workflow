import { ChainMute } from '~/parameters/chain/mute'
import { InstrumentRack } from '~/models/instrumentRack'
import { Mutable } from '~/models/mutable'

export class DrumPad extends Mutable {
    id: number
    instrumentRack: InstrumentRack

    constructor(id: number, instrumentRack: InstrumentRack, muteParameter: ChainMute) {
        super(muteParameter)
        this.id = id
        this.instrumentRack = instrumentRack
    }

    getId() {
        return this.id
    }

    getName() {
        return this.instrumentRack.getName()
    }

    getInstrumentRack() {
        return this.instrumentRack
    }
}
