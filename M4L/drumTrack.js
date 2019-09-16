exports.create = function() {
    return new DrumTrack()
}

function DrumTrack() {
    this.controlSurface = require('controlSurface').create()
    this.drumRack = require('drumRack').create()

    this.initialise = function() {
        // this.drumRack = require('drumRack').create()

        this.controlSurface.initialise()
        // this.controlSurface.onEncoderTurned(sendValue)
        this.controlSurface.onTapTempoButtonPressed(this._pushToggleActive)
        // this.controlSurface.onSceneLaunchButtonPressed(focusLayer)

        this.drumRack.initialise()
        this.drumRack.onDrumPadSelected(this._focusVoice.bind(this))
        this.drumRack.onValueChanged(this._receiveValue)
    }

    this._pushToggleActive = function(args) {
        if (args[1] === 127) {
            this.controlSurface.toggleActive()
            // this._updateDisplay()
        }
    }

    this._focusVoice = function(args) {
        if (args[0] === 'selected_drum_pad') {
            this.drumRack.focusVoice(args[2])
            // this._updateDisplay()
        }
    }

    // function focusLayer(args) {
    //     if (args[1] === 127) {
    //         this.drumRack.activeVoice().focusLayer(args[2])
    //     }
    // }

    // function updateDisplay() {
    //     this.controlSurface.displayValues(
    //         this.drumRack
    //             .activeVoice()
    //             .activeLayer()
    //             .activePage()
    //             .getParameterValues()
    //     )
    // }

    this._receiveValue = function(args) {
        utilities.log('_receiveValue')
        // updateDisplay()
    }

    // function sendValue(args) {
    //     if (args[3] >= 0) {
    //         this.drumRack
    //             .activeVoice()
    //             .activeLayer()
    //             .activePage()
    //             .getParameter(args[3])
    //             .updateValue(args[1])
    //         updateDisplay()
    //     }
    // }
}
