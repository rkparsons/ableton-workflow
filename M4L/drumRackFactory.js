include('drumRack')
const drumPadFactory = require('drumPadFactory')

exports.create = function() {
    const pathToDrumRack = 'this_device canonical_parent devices 1'
    var drumPads = []

    for (var i = 0; i < 16; i++) {
        const pathToDrumPad = pathToDrumRack + ' visible_drum_pads ' + i
        const drumPadApi = new LiveAPI(null, pathToDrumPad)

        if (drumPadApi.get('chains')[1]) {
            drumPads[drumPadApi.id] = drumPadFactory.create(pathToDrumPad, drumPadApi.get('name'))
        }
    }

    return new DrumRack(pathToDrumRack, drumPads)
}
