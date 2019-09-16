const drumPadFactory = require('drumPad')

exports.create = function() {
    return new DrumRack()
}

function DrumRack() {
    this.drumPads = {}
    this.activeDrumPadId = null
    this.focussedLayerIndex = 0
    this.path = 'this_device canonical_parent devices 1'

    this.selectedPadApi = null

    this.initialise = function() {
        for (var i = 0; i < 16; i++) {
            const drumPadApi = new LiveAPI(this._focusVoice, this.path + ' visible_drum_pads ' + i)

            if (drumPadApi.get('chains')[1]) {
                this.drumPads[drumPadApi.id] = drumPadFactory.create(drumPadApi.get('name'))
            }
        }
    }

    this.onValueChanged = function(callback) {
        for (i in this.voices) {
            this.voices[i].onValueChanged(callback)
        }
    }

    this.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.path + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    this.activeVoice = function() {
        return this.voices[this.activeVoiceId]
    }

    this.focusVoice = function(drumPadId) {
        this.activeDrumPadId = drumPadId

        if (this.drumPads[drumPadId]) {
            utilities.log(this.drumPads[drumPadId].name)
        }
    }
}
