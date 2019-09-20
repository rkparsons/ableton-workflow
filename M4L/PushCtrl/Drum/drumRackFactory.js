const { DrumRack } = require('drumRack')
const { createDrumPads } = require('drumPadFactory')

exports.createDrumRack = function(samplesFolder) {
    this.pathToDrumRack = 'this_device canonical_parent devices 1'

    const drumPads = createDrumPads(samplesFolder, this.pathToDrumRack)

    return new DrumRack(this.pathToDrumRack, drumPads)
}
