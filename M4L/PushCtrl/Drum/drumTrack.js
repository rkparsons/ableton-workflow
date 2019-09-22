exports.DrumTrack = function(drumRack, controlSurface) {
    this.drumRack = drumRack
    this.controlSurface = controlSurface
    this.controlSurface.onTapTempoButtonPressed(pushToggleActive.bind(this))
    this.controlSurface.onEncoderTurned(sendValue.bind(this))
    this.controlSurface.onTrackSelectButtonPressed(focusParameterPage.bind(this))
    this.controlSurface.onSceneLaunchButtonPressed(focusDrumLayer.bind(this))
    this.drumRack.onDrumPadSelected(focusDrumPad.bind(this))
    this.drumRack.onValueChanged(receiveValue.bind(this))

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

    function focusParameterPage(args) {
        if (args[1] === 127) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .setActiveParameterPage(args[2])
            updateDisplay.call(this)
        }
    }

    function focusDrumLayer(args) {
        if (args[1] === 127) {
            this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2])
        }
    }

    function updateDisplay() {
        if (!this.controlSurface.getIsActive()) {
            return
        }

        const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()
        const activeParameterPage = activeDrumLayer.getActiveParameterPage()
        const parameterPageNames = activeDrumLayer.getParameterPageNames()
        const activeParameterPageIndex = activeDrumLayer.getActiveParameterPageIndex()

        this.controlSurface.display(0, activeParameterPage.getParameterNames())
        this.controlSurface.display(1, activeParameterPage.getParameterValues())
        this.controlSurface.display(3, parameterPageNames)
        this.controlSurface.setTrackSelectButtons(parameterPageNames.length, activeParameterPageIndex)
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
}
