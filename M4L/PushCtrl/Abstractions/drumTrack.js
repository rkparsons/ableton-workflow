exports.create = function() {
    return new DrumTrack()
}

function DrumTrack() {
    this.controlSurface = require('controlSurface').create()
    this.drumRack = require('drumRackFactory').create()

    this.initialise = function() {
        const onOffControl = constants.pushTapTempoControl

        this.controlSurface.initialise(onOffControl)
        this.controlSurface.onEncoderTurned(sendValue.bind(this))
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
        const activeParameterPage = this.drumRack
            .getActiveDrumPad()
            .getActiveDrumLayer()
            .getActiveParameterPage()

        this.controlSurface.display(0, activeParameterPage.getParameterNames())
        this.controlSurface.display(1, activeParameterPage.getParameterValues())
    }

    this._receiveValue = function(args) {
        this._updateDisplay()
    }

    function sendValue(args) {
        if (args[3] >= 0) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
                .getParameter(args[2])
                .sendValue(args[1])

            this._updateDisplay()
        }
    }
}
