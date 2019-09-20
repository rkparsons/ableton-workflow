const { DrumTrack } = require('drumTrack')
const { DrumRackFactory } = require('drumRackFactory')
const { ControlSurfaceFactory } = require('controlSurfaceFactory')
const constants = require('constants')

exports.DrumTrackFactory = defclass(Object, function() {
    this.constructor = function(samplesFolder) {
        this.controlSurfaceFactory = new ControlSurfaceFactory()
        this.drumRackFactory = new DrumRackFactory(samplesFolder)
    }

    this.create = function() {
        const controlSurface = this.controlSurfaceFactory.create(constants.pushTapTempoControl)
        const drumRack = this.drumRackFactory.create()

        return new DrumTrack(drumRack, controlSurface)
    }
})
