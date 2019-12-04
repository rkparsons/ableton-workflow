export class Rack {
    constructor(mixerPages) {
        this.mixerPages = mixerPages
        this.activeMixerPageIndex = 0
    }

    onValueChanged(callback) {
        this.mixerPages.forEach(page => page.onValueChanged(callback))
    }

    getActiveInstrumentRack() {}

    getMixerPages() {
        return this.mixerPages
    }

    getActiveMixerPage() {
        return this.mixerPages[this.activeMixerPageIndex]
    }

    setActiveMixerPage(index) {
        this.activeMixerPageIndex = index
    }
}
