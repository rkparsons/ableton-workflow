const drumVoiceFactory = require('drumVoice')

exports.drumRack = function() {
    return new DrumRack()
}

function DrumRack() {
    this.focussedVoiceName = 'KICK'
    this.focussedLayerIndex = 0

    // populate dynamically
    this.voiceNames = ['Kick', 'Snare', 'TomLow', 'TomMid', 'Perc', 'HHTip', 'HHShank']
    this.voices = {}

    this.selectedPadApi = undefined

    this.activeVoice = function() {
        return this.voices[this.focussedVoiceName]
    }

    this.onValueChanged = function(callback) {
        for (i in this.voiceNames) {
            this.voices[this.voiceNames[i]] = drumVoiceFactory.create(this.voiceNames[i], callback)
        }
    }

    this.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, 'this_device canonical_parent devices 1 view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    this.focusVoice = function(voiceName) {
        this.focussedVoiceName = voiceName
    }
}
