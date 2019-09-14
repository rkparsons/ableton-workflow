autowatch = 1
inlets = 1
outlets = 1

const utilities = require('utilities')
const pushWrapper = require('pushWrapper')
const drumRackWrapper = require('drumRackWrapper')
const push = pushWrapper.push()
const drumRack = drumRackWrapper.drumRack()
const context = this

function initLiveApi() {
    push.initialise()
    push.onTapTempoButtonPressed(pushToggleActive)
    push.onSceneLaunchButtonPressed(focusLayer)
    push.releaseControls()

    drumRack.onDrumPadSelected(focusVoice)
    drumRack.onChain0VolumeChange(function(args) {
        if (args[0] === 'value') {
            drumRack.cacheChain0Volume(args[1])
            updateDisplay()
        }
    })
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
        drumRack.focusLayer(args[2])
    }
}

function updateDisplay() {
    push.displayValuesOnLine(1, drumRack.getFocussedParamValues())
}
