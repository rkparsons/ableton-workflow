// todo: get ride of includes
include('controlSurface')

var ControlSurfaceFactory = (function() {
    function ControlSurfaceFactory() {}

    ControlSurfaceFactory.prototype.create = function(onOffControlName) {
        return new ControlSurface(onOffControlName)
    }

    return ControlSurfaceFactory
})()
