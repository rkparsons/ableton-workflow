const { DrumTrack } = require('drumTrack')
const { createDrumRack } = require('drumRackFactory')
const { createControlSurface } = require('controlSurfaceFactory')
const constants = require('constants')

exports.createDrumTrack = function(samplesFolder) {
    const controlSurface = createControlSurface(constants.pushTapTempoControl)
    const drumRack = createDrumRack(samplesFolder)

    return new DrumTrack(drumRack, controlSurface)
}
