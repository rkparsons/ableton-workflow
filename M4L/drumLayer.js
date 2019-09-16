const parameterPageFactory = require('parameterPage')

exports.create = function(layerName) {
    return new Layer(layerName)
}

function Layer(layerName) {
    this.layerName = layerName
    this.parameterPages = []

    this.focussedPageIndex = 0
    // populate dynamically
    this.parameterPageNames = ['Sample', 'Amp', 'Pitch', 'Filter', 'Tone', 'Osc', 'Velo', 'Rand']
    
    for (parameterPageIndex in this.parameterPageNames) {
        this.parameterPages.push(parameterPageFactory.create(this.parameterPageNames[parameterPageIndex]))
    }

    this.onValueChanged = function(callback) {
        for (i in this.parameterPages) {
            this.parameterPages[i].onValueChanged(callback)
        }
    }

    this.focusPage() = function(pageIndex) {
        this.focussedPageIndex = pageIndex
    }

    this.activePage() = function() {
        return this.parameterPages[this.focussedPageIndex]
    }
}
