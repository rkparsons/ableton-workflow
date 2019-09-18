include('drumRack')
const drumPadFactory = require('drumPadFactory')

exports.create = function() {
    const pathToDrumRack = 'this_device canonical_parent devices 1'

    const drumPads = drumPadFactory.create(pathToDrumRack)

    return new DrumRack(pathToDrumRack, drumPads)
}
