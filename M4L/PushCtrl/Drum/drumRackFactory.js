include('drumRack')
include('drumPadFactory')

var DrumRackFactory = defclass(Object, function() {
    this.constructor = function() {
        this.pathToDrumRack = 'this_device canonical_parent devices 1'
        this.drumPadFactory = new DrumPadFactory()
    }

    this.create = function() {
        const drumPads = this.drumPadFactory.create(this.pathToDrumRack)

        return new DrumRack(this.pathToDrumRack, drumPads)
    }
})
