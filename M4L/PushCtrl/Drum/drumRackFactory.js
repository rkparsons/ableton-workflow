include('drumRack')
include('drumPadFactory')

var DrumRackFactory = (function() {
    function DrumRackFactory() {
        this.pathToDrumRack = 'this_device canonical_parent devices 1'
        this.drumPadFactory = new DrumPadFactory()
    }

    DrumRackFactory.prototype.create = function() {
        const drumPads = this.drumPadFactory.create(this.pathToDrumRack)

        return new DrumRack(this.pathToDrumRack, drumPads)
    }

    return DrumRackFactory
})()
