export class InstrumentRack {
    constructor(name, chains, mixerPages) {
        this.name = name
        this.chains = chains
        this.mixerPages = mixerPages
        this.activeChainIndex = 0
        this.activeMixerPageIndex = 0
    }

    getName() {
        return this.name
    }

    onValueChanged(callback) {
        this.chains.forEach(chain => chain.onValueChanged(callback))
        this.mixerPages.forEach(page => page.onValueChanged(callback))
    }

    getChains() {
        return this.chains
    }

    getActiveChain() {
        return this.chains[Math.round(this.activeChainIndex)]
    }

    incrementActiveChain() {
        if (this.activeChainIndex < this.chains.length - 1) {
            this.activeChainIndex++
        }
    }

    decrementActiveChain() {
        if (this.activeChainIndex > 0) {
            this.activeChainIndex--
        }
    }

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
