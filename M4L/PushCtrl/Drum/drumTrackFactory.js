// todo: get ride of include
include('drumTrack')
include('drumRackFactory')
include('controlSurfaceFactory')

var DrumTrackFactory = (function() {
    function DrumTrackFactory() {
        this.controlSurfaceFactory = new ControlSurfaceFactory()
        this.drumRackFactory = new DrumRackFactory()
    }

    DrumTrackFactory.prototype.create = function() {
        const controlSurface = this.controlSurfaceFactory.create(constants.pushTapTempoControl)
        const drumRack = this.drumRackFactory.create()

        return new DrumTrack(drumRack, controlSurface)
    }

    return DrumTrackFactory
})()
