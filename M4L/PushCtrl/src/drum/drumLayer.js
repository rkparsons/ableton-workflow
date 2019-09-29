export function DrumLayer(index, name, parameterPages, parameterPageNames) {
    var activeParameterPageIndex = 0

    this.getIndex = function() {
        return index
    }

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
