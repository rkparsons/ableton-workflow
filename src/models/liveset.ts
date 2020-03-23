import { Track } from '~/models/track'

export class Liveset {
    tracks: Track[]
    activeTrackIndex: number

    constructor(tracks: Track[]) {
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

    toggleActive(isPressed: boolean) {
        isPressed
            ? this.getTrack().toggleActive()
            : this.getTrack()
                  .getMode()
                  .updateDisplay()
    }
}
