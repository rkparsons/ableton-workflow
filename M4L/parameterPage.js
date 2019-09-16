function ParameterPage(pageName) {
    this.pageName = pageName

    this.parameters = []

    this.onValueChanged = function(callback) {
        for (i in this.parameters) {
            this.parameters[i].onValueChanged(callback)
        }
    }

    this.getParameterValues = function() {
        var parameterValues = []

        for (i in this.parameters) {
            parameterValues.push(this.parameters[i].getDisplayValue())
        }

        return parameterValues
    }

    this.getParameter = function(parameterIndex) {
        return this.parameters[parameterIndex]
    }
}
