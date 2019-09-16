const controlSurface = require('controlSurface').create()
const drumRack = require('drumRack').create()

exports.create = function() {
    return new DrumTrack()
}

function DrumTrack() {
    this.context = this

    this.initialise = function() {
        // drumRack = require('drumRack').create()

        controlSurface.initialise()
        // controlSurface.onEncoderTurned(sendValue)
        controlSurface.onTapTempoButtonPressed(this._pushToggleActive)
        // controlSurface.onSceneLaunchButtonPressed(focusLayer)

        drumRack.initialise()
        drumRack.onDrumPadSelected(this._focusVoice)
        drumRack.onValueChanged(this._receiveValue)
    }

    this._pushToggleActive = function(args) {
        if (args[1] === 127) {
            controlSurface.toggleActive()
            // this._updateDisplay()
        }
    }

    this._focusVoice = function(args) {
        if (args[0] === 'selected_drum_pad') {
            drumRack.focusVoice(args[2])
            // this._updateDisplay()
        }
    }

    // function focusLayer(args) {
    //     if (args[1] === 127) {
    //         drumRack.activeVoice().focusLayer(args[2])
    //     }
    // }

    // function updateDisplay() {
    //     controlSurface.displayValues(
    //         drumRack
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
    //         drumRack
    //             .activeVoice()
    //             .activeLayer()
    //             .activePage()
    //             .getParameter(args[3])
    //             .updateValue(args[1])
    //         updateDisplay()
    //     }
    // }
}
