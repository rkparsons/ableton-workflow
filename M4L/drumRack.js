const drumVoiceFactory = require('drumVoice')

exports.create = function() {
    return new DrumRack()
}

function DrumRack() {
    this.voices = {}
    this.activeVoiceId = null
    this.focussedLayerIndex = 0
    this.path = 'this_device canonical_parent devices 1'
    // populate dynamically
    this.voiceNames = ['Kick', 'Snare', 'TomLow', 'TomMid', 'Perc', 'HHTip', 'HHShank']
    this.voices = {}

    this.selectedPadApi = null

    this.onValueChanged = function(callback) {
        for (var i = 0; i < this.voiceNames.length; i++) {
            const voiceApi = new LiveAPI(this._focusVoice, this.path + ' chains ' + i)

            this.voices[voiceApi.id] = drumVoiceFactory.create(voiceApi.get('name'), callback)
        }
    }

    this.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.path + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    this.activeVoice = function() {
        return this.voices[this.activeVoiceId]
    }

    this.focusVoice = function(voiceId) {
        this.activeVoiceId = voiceId
    }
}
