autowatch = 1
inlets = 1
outlets = 1
utilities = require('utilities')
constants = require('constants') // remove global constants

function initLiveApi() {
    const drumTrack = require('drumTrack').create()

    drumTrack.initialise()
}
