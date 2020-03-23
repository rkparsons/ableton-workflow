import { InstrumentRack } from '~/models/instrumentRack'
import { MixerPage } from '~/parameterPages/mixer/mixerPage'
import { Track } from '~/models/track'

export abstract class Rack {
    track?: Track
    mixerPages: MixerPage[]
    activeMixerPageIndex: number

    constructor(mixerPages: MixerPage[]) {
        this.mixerPages = mixerPages
        this.activeMixerPageIndex = 0
    }

    abstract getActiveInstrumentRack(): InstrumentRack | undefined

    onValueChanged(callback: () => void) {
        this.mixerPages.forEach(page => page.onValueChanged(callback))
    }

    getMixerPages() {
        return this.mixerPages
    }

    getActiveMixerPage() {
        return this.mixerPages[this.activeMixerPageIndex]
    }

    setActiveMixerPage(index: number) {
        this.activeMixerPageIndex = index
    }

    getTrack() {
        return this.track
    }

    setTrack(track: Track) {
        this.track = track
    }
}
