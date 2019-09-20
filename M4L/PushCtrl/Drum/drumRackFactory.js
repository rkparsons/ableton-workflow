const { DrumRack } = require('drumRack')
const { DrumPadFactory } = require('drumPadFactory')

exports.DrumRackFactory = defclass(Object, function() {
    this.constructor = function(samplesFolder) {
        this.pathToDrumRack = 'this_device canonical_parent devices 1'
        this.drumPadFactory = new DrumPadFactory(samplesFolder)
    }

    this.create = function() {
        const drumPads = this.drumPadFactory.create(this.pathToDrumRack)

        return new DrumRack(this.pathToDrumRack, drumPads)
    }
})
