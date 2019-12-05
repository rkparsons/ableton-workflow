import { Mutable } from './mutable'

export class DrumPad extends Mutable {
    constructor(id, instrumentRack, muteParameter) {
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
