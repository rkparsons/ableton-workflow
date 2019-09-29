exports.DrumLayer = function(name, parameterPages, parameterPageNames) {
    var activeParameterPageIndex = 0

    this.getName = function() {
        return name
    }

    this.onValueChanged = function(callback) {
        for (i in parameterPages) {
            parameterPages[i].onValueChanged(callback)
        }
    }

    this.getActiveParameterPageIndex = function() {
        return activeParameterPageIndex
    }

    this.getActiveParameterPage = function() {
        return parameterPages[activeParameterPageIndex]
    }

    this.setActiveParameterPage = function(index) {
        activeParameterPageIndex = index
    }

    this.getParameterPageNames = function() {
        return parameterPageNames
    }
}
