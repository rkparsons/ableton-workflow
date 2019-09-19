var DrumLayer = (function() {
    function DrumLayer(name, parameterPages) {
        this.name = name
        this.parameterPages = parameterPages
        this.activeParameterPageIndex = 0
    }

    DrumLayer.prototype.onValueChanged = function(callback) {
        for (i in this.parameterPages) {
            this.parameterPages[i].onValueChanged(callback)
        }
    }

    DrumLayer.prototype.getActiveParameterPage = function() {
        return this.parameterPages[this.activeParameterPageIndex]
    }

    DrumLayer.prototype.setActiveParameterPage = function(index) {
        this.activeParameterPageIndex = index
    }

    return DrumLayer
})()
