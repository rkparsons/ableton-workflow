export class Liveset {
    constructor(tracks) {
        this.tracks = tracks
        this.activeTrackIndex = 0
    }

    getTrack() {
        return this.tracks[this.activeTrackIndex]
    }

    incrementTrack() {
        if (this.activeTrackIndex < this.tracks.length - 1) {
            this.getTrack().deactivate()
            this.activeTrackIndex++
            this.getTrack().activate()
        }
    }

    decrementTrack() {
        if (this.activeTrackIndex > 0) {
            this.getTrack().deactivate()
            this.activeTrackIndex--
            this.getTrack().activate()
        }
    }

    toggleActive(isPressed) {
        isPressed
            ? this.getTrack().toggleActive()
            : this.getTrack()
                  .getMode()
                  .updateDisplay()
    }
}
