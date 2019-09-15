const utilities = require('utilities')
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

        // drumRack.onValueChanged(receiveValue)
        // drumRack.onDrumPadSelected(focusVoice)
    }

    this._pushToggleActive = function(args) {
        if (args[1] === 127) {
            controlSurface.toggleActive()
            // this._updateDisplay()
        }
    }

    // function focusVoice(args) {
    //     if (args[0] === 'selected_drum_pad') {
    //         utilities.deferLow(function() {
    //             drumRack.focusVoice(args[2])
    //         }, this.context)
    //     }
    // }

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

    // function receiveValue(args) {
    //     updateDisplay()
    // }

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
