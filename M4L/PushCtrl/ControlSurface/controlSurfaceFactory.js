// todo: get ride of includes
include('controlSurface')

var ControlSurfaceFactory = defclass(Object, function() {
    this.constructor = function() {}

    this.create = function(onOffControlName) {
        return new ControlSurface(onOffControlName)
    }
})
