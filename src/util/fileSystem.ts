// todo: refactor to separate fs from sample logic
export function getCategories(samplesFolder: string, instrumentRackName: string, chainName: string) {
    const folderPath = getSamplesFolderPath(samplesFolder, instrumentRackName, chainName)
    const folder = new Folder(folderPath)
    folder.typelist = ['fold']

    let categories = []

    folder.next()
    while (!folder.end) {
        categories.push(folder.filename)
        folder.next()
    }
    folder.close()

    return categories
}

export function getSampleGroups(samplesFolder: string, instrumentRackName: string, chainName: string, categories: string[]) {
    return new Map(categories.map(category => [category, getSamples(samplesFolder, instrumentRackName, chainName, category)]))
}

function getSamples(samplesFolder: string, instrumentRackName: string, chainName: string, category: string) {
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

    return sampleNames
}

function getSamplesFolderPath(samplesFolder: string, instrumentRackName: string, chainName: string) {
    const isSharedSampleFolder = ['Layer', 'Trans'].indexOf(chainName.toString()) >= 0
    const instrumentTrackName = samplesFolder.slice(samplesFolder.lastIndexOf('/') + 1)
    const isInstrumentTrack = instrumentTrackName === instrumentRackName
    const drumPadFolder = isSharedSampleFolder ? 'Shared' : instrumentRackName

    return isInstrumentTrack ? `${samplesFolder}/${chainName}` : `${samplesFolder}/${drumPadFolder}/${chainName}`
}
