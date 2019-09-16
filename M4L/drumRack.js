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
            const drumPadApi = new LiveAPI(this._focusDrumPad, this.path + ' visible_drum_pads ' + i)

            if (drumPadApi.get('chains')[1]) {
                this.drumPads[drumPadApi.id] = drumPadFactory.create(drumPadApi.get('name'))
            }
        }
    }

    this.onValueChanged = function(callback) {
        for (i in this.drumPads) {
            this.drumPads[i].onValueChanged(callback)
        }
    }

    this.onDrumPadSelected = function(callback) {
        this.selectedPadApi = new LiveAPI(callback, this.path + ' view')
        this.selectedPadApi.property = 'selected_drum_pad'
    }

    this.activeDrumPad = function() {
        return this.drumPads[this.activeDrumPadId]
    }

    this.focusDrumPad = function(drumPadId) {
        this.activeDrumPadId = drumPadId

        if (this.drumPads[drumPadId]) {
            utilities.log(this.drumPads[drumPadId].name)
        }
    }
}
