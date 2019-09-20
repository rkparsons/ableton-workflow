const { ControlSurface } = require('controlSurface')

exports.createControlSurface = function(onOffControlName) {
    return new ControlSurface(onOffControlName)
}
