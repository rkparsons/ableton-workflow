export class Liveset {
    constructor(drumTrack) {
        this.drumTrack = drumTrack
    }

    getTrack() {
        return this.drumTrack
    }

    toggleActive(isPressed) {
        isPressed
            ? this.getTrack().toggleActive()
            : this.getTrack()
                  .getMode()
                  .updateDisplay()
    }
}
