var DrumLayer = defclass(Object, function() {
    this.constructor = function(name, parameterPages) {
        this.name = name
        this.parameterPages = parameterPages
        this.activeParameterPageIndex = 0
    }

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
})
