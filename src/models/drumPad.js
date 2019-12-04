export function DrumPad(id, instrumentRack) {
    this.getId = function() {
        return id
    }

    this.getName = function() {
        return instrumentRack.getName()
    }

    this.getInstrumentRack = function() {
        return instrumentRack
    }
}
