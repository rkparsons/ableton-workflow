export function getCategories(samplesFolder, drumPadName, drumLayerName) {
    const folder = new Folder(getSamplesFolderPath(samplesFolder, drumPadName, drumLayerName))
    folder.typelist = ['fold']

    let categories = {}
    let categoryIndex = 0

    folder.next()
    while (!folder.end) {
        categories[categoryIndex] = folder.filename
        folder.next()
        categoryIndex++
    }
    folder.close()

    return categories
}

export function getSampleGroups(samplesFolder, drumPadName, drumLayerName, categories) {
    let sampleGroups = {}

    for (i in categories) {
        sampleGroups[categories[i]] = getSamples(samplesFolder, drumPadName, drumLayerName, categories[i])
    }

    return sampleGroups
}

function getSamples(samplesFolder, drumPadName, drumLayerName, category) {
    const folder = new Folder(getSamplesFolderPath(samplesFolder, drumPadName, drumLayerName) + '/' + category)
    folder.typelist = ['WAVE']

    let sampleNames = []

    folder.next()
    while (!folder.end) {
        const indexStart = folder.filename.indexOf('_') + 1
        const indexEnd = folder.filename.indexOf('.')

        sampleNames.push(folder.filename.slice(indexStart, indexEnd).split('#')[0])
        folder.next()
    }
    folder.close()
    return [...new Set(sampleNames)]
}

function getSamplesFolderPath(samplesFolder, drumPadName, drumLayerName) {
    const isSharedSampleFolder = ['Layer', 'Trans'].indexOf(drumLayerName.toString()) >= 0
    const drumPadFolder = isSharedSampleFolder ? 'Shared' : drumPadName

    return samplesFolder + '/' + drumPadFolder + '/' + drumLayerName
}
