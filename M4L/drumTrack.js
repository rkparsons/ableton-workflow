exports.create = function() {
    return new DrumTrack()
}

function DrumTrack() {
    this.controlSurface = require('controlSurface').create()
    this.drumRack = require('drumRackFactory').create()

    this.initialise = function() {
        this.controlSurface.initialise()
        // this.controlSurface.onEncoderTurned(sendValue.bind(this))
        this.controlSurface.onTapTempoButtonPressed(this._pushToggleActive.bind(this))
        this.controlSurface.onSceneLaunchButtonPressed(this._focusDrumLayer.bind(this))
        this.drumRack.onDrumPadSelected(this._focusDrumPad.bind(this))
        this.drumRack.onValueChanged(this._receiveValue.bind(this))
    }

    this._pushToggleActive = function(args) {
        if (args[1] === 127) {
            this.controlSurface.toggleActive()
            this._updateDisplay()
        }
    }

    this._focusDrumPad = function(args) {
        if (args[0] === 'selected_drum_pad') {
            this.drumRack.setActiveDrumPad(args[2])
            this._updateDisplay()
        }
    }

    this._focusDrumLayer = function(args) {
        if (args[1] === 127) {
            this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2])
        }
    }

    this._updateDisplay = function() {
        // this.controlSurface.displayValues(
        //     this.drumRack
        //         .getActiveDrumPad()
        //         .getActiveDrumLayer()
        //         .getActiveParameterPage()
        //         .getParameterValues()
        // )
    }

    this._receiveValue = function(args) {
        // updateDisplay()
    }

    // function sendValue(args) {
    //     if (args[3] >= 0) {
    //         this.drumRack
    //             .activeDrumPad()
    //             .activeLayer()
    //             .activePage()
    //             .getParameter(args[3])
    //             .updateValue(args[1])
    //         updateDisplay()
    //     }
    // }
}
