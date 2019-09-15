const utilities = require('utilities')

exports.create = function() {
    return new DrumTrack()
}

function DrumTrack() {
    this.controlSurface = require('controlSurface').create()
    this.drumRack = require('drumRack').create()
    this.context = this

    this.initialise = function() {
        // this.drumRack = require('drumRack').create()

        this.controlSurface.initialise()
        // this.controlSurface.onEncoderTurned(sendValue)
        // this.controlSurface.onTapTempoButtonPressed(pushToggleActive)
        // this.controlSurface.onSceneLaunchButtonPressed(focusLayer)

        // this.drumRack.onValueChanged(receiveValue)
        // this.drumRack.onDrumPadSelected(focusVoice)
    }

    // function pushToggleActive(args) {
    //     if (args[1] === 127) {
    //         this.controlSurface.toggleActive()
    //         updateDisplay()
    //     }
    // }

    // function focusVoice(args) {
    //     if (args[0] === 'selected_drum_pad') {
    //         utilities.deferLow(function() {
    //             this.drumRack.focusVoice(args[2])
    //         }, this.context)
    //     }
    // }

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

    // function receiveValue(args) {
    //     updateDisplay()
    // }

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
