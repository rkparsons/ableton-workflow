import { log } from '../util'

export function DrumPad(id, name, drumLayers, mixerPages) {
    var activeDrumLayerIndex = 0
    var activeMixerPageIndex = 0

    this.getId = function() {
        return id
    }

    this.getName = function() {
        return name
    }

    this.onValueChanged = function(callback) {
        for (i in drumLayers) {
            drumLayers[i].onValueChanged(callback)
        }

        for (i in mixerPages) {
            mixerPages[i].onValueChanged(callback)
        }
    }

    this.observe = function() {
        this.getActiveDrumLayer().observe()
        this.getActiveMixerPage().observe()
    }

    this.ignore = function() {
        this.getActiveDrumLayer().ignore()
        this.getActiveMixerPage().ignore()
    }

    this.getDrumLayers = function() {
        return drumLayers
    }

    this.getActiveDrumLayer = function() {
        return drumLayers[Math.round(activeDrumLayerIndex)]
    }

    this.setActiveDrumLayer = function(drumLayerIndex) {
        this.getActiveDrumLayer().ignore()

        activeDrumLayerIndex = drumLayerIndex

        this.getActiveDrumLayer().observe()
    }

    this.incrementActiveDrumLayer = function() {
        if (activeDrumLayerIndex < drumLayers.length - 1) {
            this.setActiveDrumLayer(activeDrumLayerIndex + 1)
        }
    }

    this.decrementActiveDrumLayer = function() {
        if (activeDrumLayerIndex > 0) {
            this.setActiveDrumLayer(activeDrumLayerIndex - 1)
        }
    }

    this.getMixerPages = function() {
        return mixerPages
    }

    this.getActiveMixerPage = function() {
        return mixerPages[activeMixerPageIndex]
    }

    this.setActiveMixerPage = function(index) {
        activeMixerPageIndex && this.getActiveMixerPage().ignore()

        activeMixerPageIndex = index

        this.getActiveMixerPage().observe()
    }
}
