exports.FileReader = defclass(Object, function() {
    this.constructor = function(samplesFolder) {
        this.samplesFolder = samplesFolder
    }

    this.getCategories = function(drumPadName, drumLayerName) {
        const folder = new Folder(getSamplesFolderPath.call(this, drumPadName, drumLayerName))
        folder.typelist = ['fold']

        var categories = {}
        var categoryIndex = 0

        folder.next()
        while (!folder.end) {
            categories[categoryIndex] = folder.filename
            folder.next()
            categoryIndex++
        }
        folder.close()

        return categories
    }

    this.getSampleGroups = function(drumPadName, drumLayerName, categories) {
        // todo handle multisamples
        var sampleGroups = {}

        for (i in categories) {
            sampleGroups[categories[i]] = getSamples.call(this, drumPadName, drumLayerName, categories[i])
        }

        return sampleGroups
    }

    function getSamples(drumPadName, drumLayerName, category) {
        const folder = new Folder(getSamplesFolderPath.call(this, drumPadName, drumLayerName) + '/' + category)
        folder.typelist = ['WAVE']

        var samples = []

        folder.next()
        while (!folder.end) {
            var indexStart = folder.filename.indexOf('_') + 1
            var indexEnd = folder.filename.indexOf('.')
            var sample = folder.filename.slice(indexStart, indexEnd)
            samples.push(sample)
            folder.next()
        }
        folder.close()

        return samples
    }

    function getSamplesFolderPath(drumPadName, drumLayerName) {
        const isSharedSampleFolder = ['Layer', 'Trans'].indexOf(drumLayerName.toString()) >= 0
        const drumPadFolder = isSharedSampleFolder ? 'Shared' : drumPadName

        return this.samplesFolder + '/' + drumPadFolder + '/' + drumLayerName
    }
})
