export class DrumPad {
    constructor(id, instrumentRack, muteParameter) {
        this.id = id
        this.instrumentRack = instrumentRack
        this.muteParameter = muteParameter
    }

    getId() {
        return this.id
    }

    onValueChanged(callback) {
        muteParameter.onValueChanged(callback)
    }

    getName() {
        return this.instrumentRack.getName()
    }

    getInstrumentRack() {
        return this.instrumentRack
    }

    // todo: put in base class
    getMuteParameter() {
        return this.muteParameter
    }

    isMuted() {
        return Boolean(this.muteParameter.getValue())
    }
}
