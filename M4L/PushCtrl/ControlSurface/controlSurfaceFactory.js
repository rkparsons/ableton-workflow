exports.create = function(onOffControlName) {
    include('controlSurface')

    return new ControlSurface(onOffControlName)
}
