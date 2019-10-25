export function DrumLayer(index, name, parameterPages, muteParameter) {
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

        muteParameter.onValueChanged(callback)
    }

    this.observe = function() {
        muteParameter.observe()
        this.getActiveParameterPage().observe()
    }

    this.ignore = function() {
        muteParameter.ignore()
        this.getActiveParameterPage().ignore()
    }

    this.getParameterPages = function() {
        return parameterPages
    }

    this.getActiveParameterPage = function() {
        return parameterPages[activeParameterPageIndex]
    }

    this.setActiveParameterPage = function(index) {
        activeParameterPageIndex && this.getActiveParameterPage().ignore()

        activeParameterPageIndex = index

        this.getActiveParameterPage().observe()
    }

    this.getMuteParameter = function() {
        return muteParameter
    }

    this.isMuted = function() {
        return this.getMuteParameter().getValue() === 1
    }
}
