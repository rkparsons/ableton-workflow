const { DrumRack } = require('drumRack')
const { createDrumPads } = require('drumPadFactory')
const { createMixerPages } = require('parameterPageFactory')

exports.createDrumRack = function(samplesFolder) {
    this.pathToDrumRack = 'this_device canonical_parent devices 1'

    const result = createDrumPads(samplesFolder, this.pathToDrumRack)
    const pagesResult = createMixerPages(this.pathToDrumRack, Object.keys(result.drumPads).length)

    return new DrumRack(this.pathToDrumRack, result.drumPads, result.drumPadNames, pagesResult.mixerPages, pagesResult.mixerPageNames)
}
