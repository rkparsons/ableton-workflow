import { InstrumentChain } from './instrumentChain'
import { MixerPage } from '~/parameterPages/mixer/mixerPage'
import { Rack } from '~/models/rack'

export class InstrumentRack extends Rack {
    name: string
    chains: InstrumentChain[]
    activeChainIndex: number

    constructor(name: string, chains: InstrumentChain[], mixerPages: MixerPage[]) {
        super(mixerPages)
        this.name = name
        this.chains = chains
        this.activeChainIndex = 0
    }

    getName() {
        return this.name
    }

    onValueChanged(callback: () => void) {
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
