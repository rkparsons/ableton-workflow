exports.getCategories = function(drumPadName, layerName) {
    const isSharedSampleFolder = ['Layer', 'Trans'].indexOf(layerName.toString()) >= 0
    const drumPadFolder = isSharedSampleFolder ? 'Shared' : drumPadName
    const samplesFolder = new Folder(constants.samplesFolder + '/' + drumPadFolder + '/' + layerName)
    samplesFolder.typelist = ['fold']

    var categories = {}
    var categoryIndex = 0

    samplesFolder.next()
    while (!samplesFolder.end) {
        categories[categoryIndex] = samplesFolder.filename
        samplesFolder.next()
        categoryIndex++
    }
    samplesFolder.close()

    return categories
}

exports.getSamples = function(drumPadName, layerName, category) {
    // ***ignore multisample index***
    // if (layer.overrideSampleNames) {
    //     return layer.overrideSampleNames
    // }
    // var samples = []
    // var samplesPath = constants.drumSamplesPath + '/' + layer.basePath + '/' + layer.samples[sampleTypeName]
    // var folder = new Folder(samplesPath)
    // folder.typelist = ['WAVE']
    // folder.next()
    // while (!folder.end) {
    //     var indexStart = folder.filename.indexOf('_') + 1
    //     var indexEnd = folder.filename.indexOf('.')
    //     var sample = folder.filename.slice(indexStart, indexEnd)
    //     samples.push(sample)
    //     folder.next()
    // }
    // folder.close()
    // return samples
}
