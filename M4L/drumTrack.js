autowatch = 1
inlets = 1
outlets = 1

const utilities = require('utilities')
const pushFactory = require('push')
const drumRackFactory = require('drumRack')
const push = pushFactory.create()
const drumRack = drumRackFactory.create()
const context = this

function initLiveApi() {
    push.initialise()
    push.onEncoderTurned(sendValue)
    push.onTapTempoButtonPressed(pushToggleActive)
    push.onSceneLaunchButtonPressed(focusLayer)
    push.releaseControls()

    drumRack.onValueChanged(receiveValue)
    drumRack.onDrumPadSelected(focusVoice)
}

function pushToggleActive(args) {
    if (args[1] === 127) {
        push.toggleActive()
        updateDisplay()
    }
}

function focusVoice(args) {
    if (args[0] === 'selected_drum_pad') {
        utilities.deferLow(function() {
            drumRack.focusVoice(push.getDrumPadNameById(args[2]))
        }, context)
    }
}

function focusLayer(args) {
    if (args[1] === 127) {
        drumRack.activeVoice().focusLayer(args[2])
    }
}

function updateDisplay() {
    push.displayValues(
        drumRack
            .activeVoice()
            .activeLayer()
            .activePage()
            .getParameterValues()
    )
}

function receiveValue(args) {
    updateDisplay()
}

function sendValue(args) {
    if (args[3] >= 0) {
        drumRack
            .activeVoice()
            .activeLayer()
            .activePage()
            .getParameter(args[3])
            .updateValue(args[1])
        updateDisplay()
    }
}
