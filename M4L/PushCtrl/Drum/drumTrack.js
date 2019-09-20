exports.DrumTrack = defclass(Object, function() {
    this.constructor = function(drumRack, controlSurface) {
        this.drumRack = drumRack
        this.controlSurface = controlSurface
        this.controlSurface.onEncoderTurned(sendValue.bind(this))
        this.controlSurface.onTapTempoButtonPressed(pushToggleActive.bind(this))
        this.controlSurface.onSceneLaunchButtonPressed(focusDrumLayer.bind(this))
        this.drumRack.onDrumPadSelected(focusDrumPad.bind(this))
        this.drumRack.onValueChanged(receiveValue.bind(this))
    }

    function pushToggleActive(args) {
        if (args[1] === 127) {
            this.controlSurface.toggleActive()
            updateDisplay.call(this)
        }
    }

    function focusDrumPad(args) {
        if (args[0] === 'selected_drum_pad') {
            this.drumRack.setActiveDrumPad(args[2])
            updateDisplay.call(this)
        }
    }

    function focusDrumLayer(args) {
        if (args[1] === 127) {
            this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2])
        }
    }

    function updateDisplay() {
        const activeParameterPage = this.drumRack
            .getActiveDrumPad()
            .getActiveDrumLayer()
            .getActiveParameterPage()

        this.controlSurface.display(0, activeParameterPage.getParameterNames())
        this.controlSurface.display(1, activeParameterPage.getParameterValues())
    }

    function receiveValue(args) {
        updateDisplay.call(this)
    }

    function sendValue(args) {
        if (args[3] >= 0) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
                .getParameter(args[2])
                .sendValue(args[1])

            updateDisplay.call(this)
        }
    }
})
