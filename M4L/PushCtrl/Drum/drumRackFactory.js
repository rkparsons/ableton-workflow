const { DrumRack } = require('drumRack')
const { createDrumPads } = require('drumPadFactory')

exports.createDrumRack = function(samplesFolder) {
    this.pathToDrumRack = 'this_device canonical_parent devices 1'

    const result = createDrumPads(samplesFolder, this.pathToDrumRack)

    return new DrumRack(this.pathToDrumRack, result.drumPads, result.drumPadNames)
}
