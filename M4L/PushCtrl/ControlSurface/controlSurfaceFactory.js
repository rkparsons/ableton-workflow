const { ControlSurface } = require('controlSurface')

exports.ControlSurfaceFactory = function() {
    this.create = function(onOffControlName) {
        return new ControlSurface(onOffControlName)
    }
}
