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

    this.getParameterPages = function() {
        return parameterPages
    }

    this.getActiveParameterPage = function() {
        return parameterPages[activeParameterPageIndex]
    }

    this.setActiveParameterPage = function(index) {
        activeParameterPageIndex = index
    }

    this.getMuteParameter = function() {
        return muteParameter
    }

    this.isMuted = function() {
        return this.getMuteParameter().getValue() === 1
    }
}
