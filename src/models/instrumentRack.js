export function InstrumentRack(id, name, chains, mixerPages) {
    var activeChainIndex = 0
    var activeMixerPageIndex = 0

    this.getId = function() {
        return id
    }

    this.getName = function() {
        return name
    }

    this.onValueChanged = function(callback) {
        for (i in chains) {
            chains[i].onValueChanged(callback)
        }

        for (i in mixerPages) {
            mixerPages[i].onValueChanged(callback)
        }
    }

    this.getChains = function() {
        return chains
    }

    this.getActiveChain = function() {
        return chains[Math.round(activeChainIndex)]
    }

    this.incrementActiveChain = function() {
        if (activeChainIndex < chains.length - 1) {
            activeChainIndex++
        }
    }

    this.decrementActiveChain = function() {
        if (activeChainIndex > 0) {
            activeChainIndex--
        }
    }

    this.getMixerPages = function() {
        return mixerPages
    }

    this.getActiveMixerPage = function() {
        return mixerPages[activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        activeMixerPageIndex = index
    }
}
