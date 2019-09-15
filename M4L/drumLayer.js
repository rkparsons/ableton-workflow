const parameterPageFactory = require('parameterPage')

exports.create = function(layerName, callback) {
    return new Layer(layerName, callback)
}

function Layer(layerName, callback) {
    this.layerName = layerName
    this.parameterPages = []

    this.focussedPageIndex = 0
    // populate dynamically
    this.parameterPageNames = ['Sample', 'Amp', 'Pitch', 'Filter', 'Tone', 'Osc', 'Velo', 'Rand']
    
    for (parameterPageIndex in this.parameterPageNames) {
        this.parameterPages.push(parameterPageFactory.create(this.parameterPageNames[parameterPageIndex], callback))
    }

    this.focusPage() = function(pageIndex) {
        this.focussedPageIndex = pageIndex
    }

    this.activePage() = function() {
        return this.parameterPages[this.focussedPageIndex]
    }
}
