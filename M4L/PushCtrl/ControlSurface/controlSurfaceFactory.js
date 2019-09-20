const { defclass } = require('util')
const { ControlSurface } = require('controlSurface')

exports.ControlSurfaceFactory = defclass(Object, function() {
    this.constructor = function() {}

    this.create = function(onOffControlName) {
        return new ControlSurface(onOffControlName)
    }
})
