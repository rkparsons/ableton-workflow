// todo: get ride of include
include('drumTrack')
include('drumRackFactory')
include('controlSurfaceFactory')

var DrumTrackFactory = defclass(Object, function() {
    this.constructor = function() {
        this.controlSurfaceFactory = new ControlSurfaceFactory()
        this.drumRackFactory = new DrumRackFactory()
    }

    this.create = function() {
        const controlSurface = this.controlSurfaceFactory.create(constants.pushTapTempoControl)
        const drumRack = this.drumRackFactory.create()

        return new DrumTrack(drumRack, controlSurface)
    }
})