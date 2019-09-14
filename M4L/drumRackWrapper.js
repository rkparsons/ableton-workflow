const drumRackParams = require('drumRack').params

exports.drumRack = function() {
    return new DrumRack()
}

function DrumRack() {
    this.focussedVoiceName = 'KICK'
    this.focussedLayerIndex = 0

    this.parameterCache = {}
    this.parameters = {
        KICK: [['volume[0]', 'volume[2]', 'volume[3]', 'volume[4]']],
    }

    this.selectedPadApi = undefined
    this.pathToDrumRack = 'this_device canonical_parent devices 1'
    this.pathToChain0Volume = this.pathToDrumRack + ' chains 0 mixer_device volume'
    this.pathToView = this.pathToDrumRack + ' view'
    this.chain0Volume = null

    this.onDrumPadSelected = function(callback) {
        this.observeProperty(this.pathToView, 'selected_drum_pad', callback)
    }

    this.onChain0VolumeChange = function(callback) {
        this.observeProperty(this.pathToChain0Volume, 'value', callback)
    }

    this.observeProperty = function(pathToLiveObject, propertyName, callback) {
        this.selectedPadApi = new LiveAPI(callback, pathToLiveObject)
        this.selectedPadApi.property = propertyName
    }

    this.cacheChain0Volume = function(value) {
        this.parameterCache['volume[0]'] = value
    }

    this.getFocussedParamValues = function() {
        const parameterKeys = this.parameters[this.focussedVoiceName][this.focussedLayerIndex]
        const parameterValues = []

        for (i in parameterKeys) {
            parameterValues[i] = Math.round(this.parameterCache[parameterKeys[i]] * 100) / 100
        }

        return parameterValues
    }

    this.focusVoice = function(voiceName) {
        this.focussedVoiceName = voiceName
        this.focussedLayerIndex = 0
    }

    this.focusLayer = function(layerIndex) {
        this.focussedLayerIndex = layerIndex
    }
}
