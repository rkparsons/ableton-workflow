exports.DrumLayer = function(name, parameterPages, parameterPageNames) {
    this.name = name
    this.parameterPages = parameterPages
    this.activeParameterPageIndex = 0
    this.parameterPageNames = parameterPageNames

    this.onValueChanged = function(callback) {
        for (i in this.parameterPages) {
            this.parameterPages[i].onValueChanged(callback)
        }
    }

    this.getActiveParameterPage = function() {
        return this.parameterPages[this.activeParameterPageIndex]
    }

    this.setActiveParameterPage = function(index) {
        this.activeParameterPageIndex = index
    }

    this.getParameterPageNames = function() {
        return this.parameterPageNames
    }
}
