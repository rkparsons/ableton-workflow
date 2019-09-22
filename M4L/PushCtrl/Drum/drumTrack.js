exports.DrumTrack = function(drumRack, controlSurface) {
    this.isActive = false
    this.drumRack = drumRack
    this.controlSurface = controlSurface
    this.controlSurface.on('Tap_Tempo_Button', pushToggleActive.bind(this))
    this.controlSurface.on('Track_State_Buttons', focusDrumLayer.bind(this))
    this.controlSurface.on('Track_Select_Buttons', focusParameterPage.bind(this))
    this.controlSurface.on('Track_Controls', sendValue.bind(this))
    this.drumRack.onDrumPadSelected(focusDrumPad.bind(this))
    this.drumRack.onValueChanged(receiveValue.bind(this))

    function pushToggleActive(args) {
        if (args[1] === 127) {
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()

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
        if (this.isActive && args[1] === 127) {
            this.drumRack.getActiveDrumPad().setActiveDrumLayer(args[2])
            updateDisplay.call(this)
        }
    }

    function focusParameterPage(args) {
        if (this.isActive && args[1] === 127) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .setActiveParameterPage(args[2])
            updateDisplay.call(this)
        }
    }

    function sendValue(args) {
        if (this.isActive && args[3] >= 0) {
            this.drumRack
                .getActiveDrumPad()
                .getActiveDrumLayer()
                .getActiveParameterPage()
                .getParameter(args[2])
                .sendValue(args[1])

            updateDisplay.call(this)
        }
    }

    function updateDisplay() {
        if (this.isActive) {
            const activeDrumPad = this.drumRack.getActiveDrumPad()
            const activeDrumLayer = activeDrumPad.getActiveDrumLayer()
            const activeParameterPage = activeDrumLayer.getActiveParameterPage()
            const parameterPageNames = activeDrumLayer.getParameterPageNames()
            const activeParameterPageIndex = activeDrumLayer.getActiveParameterPageIndex()
            const parameterNames = activeParameterPage.getParameterNames()

            this.controlSurface.display(0, parameterNames)
            this.controlSurface.display(1, activeParameterPage.getParameterValues())
            this.controlSurface.display(2, ['  [' + activeDrumLayer.getName() + ']'])
            this.controlSurface.display(3, parameterPageNames)
            this.controlSurface.trackSelect(parameterPageNames.length, activeParameterPageIndex)
            this.controlSurface.trackState(activeDrumPad.getDrumLayerNames().length, activeDrumPad.getActiveDrumLayerIndex())
        }
    }

    function receiveValue(args) {
        if (this.isActive) {
            updateDisplay.call(this)
        }
    }
}
