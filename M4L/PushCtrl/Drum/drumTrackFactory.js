exports.create = function() {
    include('drumTrack')
    const controlSurface = require('controlSurfaceFactory').create(constants.pushTapTempoControl)
    const drumRack = require('drumRackFactory').create()

    return new DrumTrack(drumRack, controlSurface)
}
