import { Rack } from '~/models/rack'

export class InstrumentRack extends Rack {
    constructor(name, chains, mixerPages) {
        super(mixerPages)
        this.name = name
        this.chains = chains
        this.activeChainIndex = 0
    }

    getName() {
        return this.name
    }

    onValueChanged(callback) {
        super.onValueChanged(callback)
        this.chains.forEach(chain => chain.onValueChanged(callback))
    }

    getActiveInstrumentRack() {
        return this
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
}
