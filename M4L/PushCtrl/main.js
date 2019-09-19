autowatch = 1
inlets = 1
outlets = 1
constants = require('constants') // remove global constants
constants.projectFolder = this.patcher.filepath.slice(0, this.patcher.filepath.lastIndexOf('/'))
constants.samplesFolder = constants.projectFolder + '/Samples'

function initLiveApi() {
    const drumTrack = require('drumTrackFactory').create()
}

function log() {
    for (var i = 0, len = arguments.length; i < len; i++) {
        var message = arguments[i]
        if (message && message.toString) {
            var s = message.toString()
            if (s.indexOf('[object ') >= 0) {
                s = JSON.stringify(message)
            }
            post(s)
        } else if (message === null) {
            post('<null>')
        } else {
            post(message)
        }
    }
    post('\n')
}
