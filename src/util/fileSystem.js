export function getCategories(samplesFolder, instrumentRackName, chainName) {
    const folderPath = getSamplesFolderPath(samplesFolder, instrumentRackName, chainName)
    const folder = new Folder(folderPath)
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

export function getSampleGroups(samplesFolder, instrumentRackName, chainName, categories) {
    let sampleGroups = {}

    for (i in categories) {
        sampleGroups[categories[i]] = getSamples(samplesFolder, instrumentRackName, chainName, categories[i])
    }

    return sampleGroups
}

function getSamples(samplesFolder, instrumentRackName, chainName, category) {
    const folder = new Folder(getSamplesFolderPath(samplesFolder, instrumentRackName, chainName) + '/' + category)
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

function getSamplesFolderPath(samplesFolder, instrumentRackName, chainName) {
    const isSharedSampleFolder = ['Layer', 'Trans'].indexOf(chainName.toString()) >= 0
    const instrumentTrackName = samplesFolder.slice(samplesFolder.lastIndexOf('/') + 1)
    const isInstrumentTrack = instrumentTrackName === instrumentRackName
    const drumPadFolder = isSharedSampleFolder ? 'Shared' : instrumentRackName

    return isInstrumentTrack ? `${samplesFolder}/${chainName}` : `${samplesFolder}/${drumPadFolder}/${chainName}`
}
